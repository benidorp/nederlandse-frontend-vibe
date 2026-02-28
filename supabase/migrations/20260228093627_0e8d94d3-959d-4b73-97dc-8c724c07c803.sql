
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow all access to ai_jobs" ON public.ai_jobs;
DROP POLICY IF EXISTS "Allow all access to ai_usage_logs" ON public.ai_usage_logs;
DROP POLICY IF EXISTS "Allow all access to ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Allow all access to ai_settings" ON public.ai_settings;

-- ai_jobs: authenticated users can read and insert (edge function uses service role for updates)
CREATE POLICY "Authenticated users can read ai_jobs"
  ON public.ai_jobs FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert ai_jobs"
  ON public.ai_jobs FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update ai_jobs"
  ON public.ai_jobs FOR UPDATE TO authenticated USING (true);

-- ai_usage_logs: authenticated users can read only
CREATE POLICY "Authenticated users can read ai_usage_logs"
  ON public.ai_usage_logs FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert ai_usage_logs"
  ON public.ai_usage_logs FOR INSERT TO authenticated WITH CHECK (true);

-- ai_generated_content: authenticated users can CRUD
CREATE POLICY "Authenticated users can read ai_generated_content"
  ON public.ai_generated_content FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert ai_generated_content"
  ON public.ai_generated_content FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update ai_generated_content"
  ON public.ai_generated_content FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete ai_generated_content"
  ON public.ai_generated_content FOR DELETE TO authenticated USING (true);

-- ai_settings: authenticated users can read only (service role manages writes)
CREATE POLICY "Authenticated users can read ai_settings"
  ON public.ai_settings FOR SELECT TO authenticated USING (true);
