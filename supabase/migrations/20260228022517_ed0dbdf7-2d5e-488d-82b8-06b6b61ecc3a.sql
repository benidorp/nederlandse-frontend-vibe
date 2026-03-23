
-- AI Jobs table - tracks all AI processing tasks
CREATE TABLE public.ai_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_type TEXT NOT NULL CHECK (job_type IN ('translate', 'blog', 'meta_optimize', 'alt_text', 'internal_links', 'code_generate', 'page_improve')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  model TEXT NOT NULL DEFAULT 'gpt-3.5-turbo',
  input_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  output_data JSONB,
  tokens_used INTEGER DEFAULT 0,
  cost_usd NUMERIC(10,6) DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- AI Usage Logs - detailed token tracking
CREATE TABLE public.ai_usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES public.ai_jobs(id) ON DELETE CASCADE,
  model TEXT NOT NULL,
  prompt_tokens INTEGER NOT NULL DEFAULT 0,
  completion_tokens INTEGER NOT NULL DEFAULT 0,
  total_tokens INTEGER NOT NULL DEFAULT 0,
  cost_usd NUMERIC(10,6) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- AI Generated Content - permanent storage of all AI output
CREATE TABLE public.ai_generated_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES public.ai_jobs(id) ON DELETE SET NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('blog', 'translation', 'meta', 'alt_text', 'code', 'internal_links', 'page_improvement')),
  title TEXT,
  language TEXT DEFAULT 'en',
  content TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- AI Settings - system configuration
CREATE TABLE public.ai_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert default settings
INSERT INTO public.ai_settings (setting_key, setting_value) VALUES
  ('daily_token_limit', '{"limit": 500000}'::jsonb),
  ('monthly_token_limit', '{"limit": 10000000}'::jsonb),
  ('default_model_simple', '{"model": "gpt-3.5-turbo"}'::jsonb),
  ('default_model_advanced', '{"model": "gpt-4"}'::jsonb),
  ('rate_limit_per_minute', '{"limit": 20}'::jsonb);

-- Enable RLS
ALTER TABLE public.ai_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_usage_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_generated_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_settings ENABLE ROW LEVEL SECURITY;

-- Public read/write policies (no auth required for this admin tool)
CREATE POLICY "Allow all access to ai_jobs" ON public.ai_jobs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to ai_usage_logs" ON public.ai_usage_logs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to ai_generated_content" ON public.ai_generated_content FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to ai_settings" ON public.ai_settings FOR ALL USING (true) WITH CHECK (true);

-- Updated at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_ai_jobs_updated_at BEFORE UPDATE ON public.ai_jobs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_ai_generated_content_updated_at BEFORE UPDATE ON public.ai_generated_content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_ai_settings_updated_at BEFORE UPDATE ON public.ai_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
