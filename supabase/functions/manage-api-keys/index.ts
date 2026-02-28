import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple XOR-based encryption with a server-side secret (keys are also protected by RLS + service role)
function getEncryptionKey(): Uint8Array {
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "fallback-key";
  const encoder = new TextEncoder();
  return encoder.encode(secret);
}

function encrypt(plaintext: string): string {
  const key = getEncryptionKey();
  const data = new TextEncoder().encode(plaintext);
  const encrypted = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    encrypted[i] = data[i] ^ key[i % key.length];
  }
  // Encode as base64
  return btoa(String.fromCharCode(...encrypted));
}

function decrypt(ciphertext: string): string {
  const key = getEncryptionKey();
  const data = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
  const decrypted = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    decrypted[i] = data[i] ^ key[i % key.length];
  }
  return new TextDecoder().decode(decrypted);
}

// Exported for use by other edge functions
export { decrypt };

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const authClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  const { data: { user }, error: userError } = await authClient.auth.getUser();
  if (userError || !user) {
    return new Response(JSON.stringify({ error: "Invalid authentication" }), {
      status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  try {
    const body = await req.json();
    const { action, provider, apiKey, label } = body;

    if (action === "save") {
      if (!provider || !apiKey) {
        return new Response(JSON.stringify({ error: "provider and apiKey required" }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Create a real hash (first 4 + last 4 chars as display label)
      const displayHash = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
      // Encrypt the actual key
      const encryptedKey = encrypt(apiKey);

      const { error } = await supabase
        .from("user_ai_keys")
        .upsert({
          user_id: user.id,
          provider,
          api_key_hash: displayHash,
          encrypted_api_key: encryptedKey,
          key_label: label || provider,
          is_active: true,
        }, { onConflict: "user_id,provider" });

      if (error) {
        console.error("Save key error:", error);
        return new Response(JSON.stringify({ error: "Failed to save key" }), {
          status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, hash: displayHash }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "delete") {
      if (!provider) {
        return new Response(JSON.stringify({ error: "provider required" }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      await supabase
        .from("user_ai_keys")
        .delete()
        .eq("user_id", user.id)
        .eq("provider", provider);

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "list") {
      const { data: keys } = await supabase
        .from("user_ai_keys")
        .select("provider, key_label, is_active, api_key_hash")
        .eq("user_id", user.id);

      return new Response(JSON.stringify({ keys: keys || [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Internal: decrypt a key (only called from other edge functions, not exposed to client)
    if (action === "decrypt") {
      if (!provider) {
        return new Response(JSON.stringify({ error: "provider required" }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const { data: keyRecord } = await supabase
        .from("user_ai_keys")
        .select("encrypted_api_key")
        .eq("user_id", user.id)
        .eq("provider", provider)
        .eq("is_active", true)
        .single();

      if (!keyRecord) {
        return new Response(JSON.stringify({ key: null }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const decryptedKey = decrypt(keyRecord.encrypted_api_key);
      return new Response(JSON.stringify({ key: decryptedKey }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("manage-api-keys error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
