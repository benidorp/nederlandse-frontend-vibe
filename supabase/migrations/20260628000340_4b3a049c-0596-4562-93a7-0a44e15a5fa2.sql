
CREATE TABLE IF NOT EXISTS public.system_secrets (
  key text PRIMARY KEY,
  value text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

REVOKE ALL ON public.system_secrets FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.system_secrets TO service_role;

ALTER TABLE public.system_secrets ENABLE ROW LEVEL SECURITY;
-- No policies: only service_role (bypasses RLS) can read/write.

INSERT INTO public.system_secrets (key, value)
VALUES ('gsc_reinspect_cron_token', encode(gen_random_bytes(32), 'hex'))
ON CONFLICT (key) DO NOTHING;

-- Enable required extensions for scheduling.
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
