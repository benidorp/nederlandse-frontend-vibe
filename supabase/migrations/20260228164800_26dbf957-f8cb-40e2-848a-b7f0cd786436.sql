
-- User AI provider preferences
CREATE TABLE public.user_ai_preferences (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  default_provider text NOT NULL DEFAULT 'lovable',
  low_cost_mode boolean NOT NULL DEFAULT false,
  auto_approve boolean NOT NULL DEFAULT false,
  suggest_only boolean NOT NULL DEFAULT false,
  manual_approval boolean NOT NULL DEFAULT true,
  fallback_enabled boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE public.user_ai_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own preferences" ON public.user_ai_preferences
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own preferences" ON public.user_ai_preferences
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own preferences" ON public.user_ai_preferences
  FOR UPDATE TO authenticated USING (auth.uid() = user_id);

-- User API keys (encrypted storage)
CREATE TABLE public.user_ai_keys (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  provider text NOT NULL,
  api_key_hash text NOT NULL,
  encrypted_api_key text NOT NULL,
  key_label text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, provider)
);

ALTER TABLE public.user_ai_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own keys" ON public.user_ai_keys
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own keys" ON public.user_ai_keys
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own keys" ON public.user_ai_keys
  FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own keys" ON public.user_ai_keys
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- AI generated pages (for page creation automation)
CREATE TABLE public.ai_generated_pages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  title text NOT NULL,
  slug text NOT NULL,
  html_content text NOT NULL,
  meta_title text,
  meta_description text,
  language text NOT NULL DEFAULT 'en',
  source_page_id uuid,
  domain text,
  niche text,
  status text NOT NULL DEFAULT 'draft',
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_generated_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own pages" ON public.ai_generated_pages
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own pages" ON public.ai_generated_pages
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own pages" ON public.ai_generated_pages
  FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own pages" ON public.ai_generated_pages
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Add provider column to ai_jobs for tracking which AI was used
ALTER TABLE public.ai_jobs ADD COLUMN IF NOT EXISTS provider text DEFAULT 'openai';

-- Add provider to ai_usage_logs
ALTER TABLE public.ai_usage_logs ADD COLUMN IF NOT EXISTS provider text DEFAULT 'openai';

-- Triggers for updated_at
CREATE TRIGGER update_user_ai_preferences_updated_at
  BEFORE UPDATE ON public.user_ai_preferences
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_ai_keys_updated_at
  BEFORE UPDATE ON public.user_ai_keys
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_generated_pages_updated_at
  BEFORE UPDATE ON public.ai_generated_pages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
