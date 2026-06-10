
-- 1. Restrict ai_jobs client writes — service role (edge functions) handles inserts
DROP POLICY IF EXISTS "Users can insert own ai_jobs" ON public.ai_jobs;
DROP POLICY IF EXISTS "Users can update own ai_jobs" ON public.ai_jobs;
DROP POLICY IF EXISTS "Users can delete own ai_jobs" ON public.ai_jobs;

CREATE POLICY "Admins can insert ai_jobs"
  ON public.ai_jobs FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update ai_jobs"
  ON public.ai_jobs FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete ai_jobs"
  ON public.ai_jobs FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 2. Explicit service_role insert policy for contact_submissions (clarity)
CREATE POLICY "Service role can insert contact submissions"
  ON public.contact_submissions FOR INSERT TO service_role
  WITH CHECK (true);

-- 3. Set fixed search_path on SECURITY DEFINER functions
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public;

-- 4. Revoke public EXECUTE on internal queue helpers (server-only)
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
