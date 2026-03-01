const ALLOWED_ORIGINS = [
  "https://nederlandse-frontend-vibe.lovable.app",
  "https://id-preview--5b060d0c-1cc2-4ae2-9b34-5f25fafaaaea.lovable.app",
  "https://5b060d0c-1cc2-4ae2-9b34-5f25fafaaaea.lovableproject.com",
  "http://localhost:5173",
  "http://localhost:8080",
];

export function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Access-Control-Allow-Credentials": "true",
  };
}

export function handleCorsPreflightIfNeeded(req: Request): Response | null {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: getCorsHeaders(req) });
  }
  return null;
}
