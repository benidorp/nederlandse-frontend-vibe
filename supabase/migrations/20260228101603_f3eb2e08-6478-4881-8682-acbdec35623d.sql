
-- Add user_id column to ai_jobs, ai_usage_logs, ai_generated_content
ALTER TABLE public.ai_jobs ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.ai_usage_logs ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.ai_generated_content ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop old overly permissive RLS policies
DROP POLICY IF EXISTS "Authenticated users can read ai_jobs" ON public.ai_jobs;
DROP POLICY IF EXISTS "Authenticated users can insert ai_jobs" ON public.ai_jobs;
DROP POLICY IF EXISTS "Authenticated users can update ai_jobs" ON public.ai_jobs;

DROP POLICY IF EXISTS "Authenticated users can read ai_usage_logs" ON public.ai_usage_logs;
DROP POLICY IF EXISTS "Authenticated users can insert ai_usage_logs" ON public.ai_usage_logs;

DROP POLICY IF EXISTS "Authenticated users can read ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Authenticated users can insert ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Authenticated users can update ai_generated_content" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Authenticated users can delete ai_generated_content" ON public.ai_generated_content;

-- ai_jobs: users can only see/insert their own jobs (edge function uses service role for updates)
CREATE POLICY "Users can read own ai_jobs"
  ON public.ai_jobs FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own ai_jobs"
  ON public.ai_jobs FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ai_usage_logs: users can only read their own logs
CREATE POLICY "Users can read own ai_usage_logs"
  ON public.ai_usage_logs FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- ai_generated_content: users can CRUD their own content
CREATE POLICY "Users can read own ai_generated_content"
  ON public.ai_generated_content FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own ai_generated_content"
  ON public.ai_generated_content FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own ai_generated_content"
  ON public.ai_generated_content FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own ai_generated_content"
  ON public.ai_generated_content FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Add indexes for user_id lookups
CREATE INDEX idx_ai_jobs_user_id ON public.ai_jobs(user_id);
CREATE INDEX idx_ai_usage_logs_user_id ON public.ai_usage_logs(user_id);
CREATE INDEX idx_ai_generated_content_user_id ON public.ai_generated_content(user_id);
