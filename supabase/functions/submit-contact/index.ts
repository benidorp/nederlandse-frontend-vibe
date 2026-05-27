import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const sanitize = (s: string, max: number) =>
  String(s ?? "")
    .trim()
    .slice(0, max)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

const isValidEmail = (e: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 255;

// very small in-memory rate limit (per IP, per cold start)
const hits = new Map<string, { c: number; t: number }>();
const RL_WINDOW = 60_000;
const RL_MAX = 5;

const isLimited = (ip: string) => {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > RL_WINDOW) {
    hits.set(ip, { c: 1, t: now });
    return false;
  }
  h.c++;
  return h.c > RL_MAX;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  if (isLimited(ip)) return json({ error: "Too many requests" }, 429);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // honeypot
  if (body?.website) return json({ ok: true });

  const name = sanitize(body?.name ?? "", 100);
  const email = sanitize(body?.email ?? "", 255);
  const domain = sanitize(body?.domain ?? "", 255);
  const message = sanitize(body?.message ?? "", 2000);
  const source_page = sanitize(body?.source_page ?? "", 500);

  if (!name) return json({ error: "Name is required" }, 400);
  if (!isValidEmail(email)) return json({ error: "Invalid email" }, 400);
  if (!domain) return json({ error: "Domain is required" }, 400);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  const recipient = "alice19777@gmail.com";

  const { data: inserted, error: insertErr } = await supabase
    .from("contact_submissions")
    .insert({
      name,
      email,
      domain,
      message: message || null,
      source_page: source_page || null,
      recipient_email: recipient,
    })
    .select("id")
    .single();

  if (insertErr) {
    console.error("insert error", insertErr);
    return json({ error: "Could not save your message" }, 500);
  }

  // Try to send email via Resend if a key is configured (optional).
  let emailSent = false;
  let emailError: string | null = null;
  const resendKey = Deno.env.get("RESEND_API_KEY");

  if (resendKey) {
    try {
      const html = `
        <h2>New premium domain inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Domain:</strong> ${escapeHtml(domain)}</p>
        <p><strong>Source:</strong> ${escapeHtml(source_page || "-")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
          message || "(no message)"
        )}</pre>
      `;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Premium Domains <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email,
          subject: `Premium Domain Inquiry: ${domain}`,
          html,
        }),
      });
      if (!res.ok) {
        emailError = `resend ${res.status}: ${await res.text()}`;
      } else {
        emailSent = true;
      }
    } catch (e) {
      emailError = (e as Error).message;
    }

    await supabase
      .from("contact_submissions")
      .update({ email_sent: emailSent, email_error: emailError })
      .eq("id", inserted.id);
  }

  return json({ ok: true, id: inserted.id, emailSent });
});
