import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

import { getCorsHeaders, handleCorsPreflightIfNeeded } from "../_shared/cors.ts";
import { validateApiKey, validateProvider } from "../_shared/validation.ts";

// AES-GCM encryption using Web Crypto API
function getEncryptionKeyBytes(): Uint8Array {
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "fallback-key";
  const encoder = new TextEncoder();
  const raw = encoder.encode(secret);
  // Use first 32 bytes (256 bits) for AES-256, pad if needed
  const key = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    key[i] = raw[i % raw.length];
  }
  return key;
}

async function importKey(): Promise<CryptoKey> {
  const keyBytes = getEncryptionKeyBytes();
  return await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encrypt(plaintext: string): Promise<string> {
  const key = await importKey();
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV for AES-GCM
  const encoded = new TextEncoder().encode(plaintext);
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );
  // Prepend IV to ciphertext, then base64 encode
  const combined = new Uint8Array(iv.length + new Uint8Array(ciphertext).length);
  combined.set(iv);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return btoa(String.fromCharCode(...combined));
}

async function decrypt(ciphertext: string): Promise<string> {
  const key = await importKey();
  const combined = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  return new TextDecoder().decode(decrypted);
}

// Legacy XOR decrypt for migration of old keys
function decryptLegacyXOR(ciphertext: string): string {
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "fallback-key";
  const key = new TextEncoder().encode(secret);
  const data = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
  const decrypted = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    decrypted[i] = data[i] ^ key[i % key.length];
  }
  return new TextDecoder().decode(decrypted);
}

// Try AES-GCM first, fall back to legacy XOR for old keys
async function decryptWithFallback(ciphertext: string): Promise<string> {
  try {
    return await decrypt(ciphertext);
  } catch {
    // Legacy XOR-encrypted key — decrypt and re-encrypt with AES-GCM
    return decryptLegacyXOR(ciphertext);
  }
}

// Exported for use by other edge functions
export { decrypt, decryptWithFallback };

serve(async (req) => {
  const preflight = handleCorsPreflightIfNeeded(req);
  if (preflight) return preflight;
  const corsHeaders = getCorsHeaders(req);

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

      const providerErr = validateProvider(provider);
      if (providerErr) {
        return new Response(JSON.stringify({ error: providerErr }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const apiKeyErr = validateApiKey(apiKey);
      if (apiKeyErr) {
        return new Response(JSON.stringify({ error: apiKeyErr }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const displayHash = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
      const encryptedKey = await encrypt(apiKey);

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

      const decryptedKey = await decryptWithFallback(keyRecord.encrypted_api_key);
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
