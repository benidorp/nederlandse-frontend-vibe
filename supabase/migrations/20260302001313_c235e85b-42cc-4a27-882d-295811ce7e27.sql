
-- Table to dynamically store language routes per vertical
-- When a page is translated, a record is added here
-- The VerticalLanguageSwitcher merges these with static config
CREATE TABLE public.vertical_language_routes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  vertical TEXT NOT NULL,        -- e.g. 'nonprofit', 'photography', 'premium-domains'
  lang_code TEXT NOT NULL,       -- e.g. 'es', 'it', 'pl'
  lang_name TEXT NOT NULL,       -- e.g. 'Español', 'Italiano'
  path TEXT NOT NULL,            -- e.g. '/es/organizacion-sin-animo-de-lucro-...'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(vertical, lang_code)    -- one entry per vertical+language
);

-- Enable RLS
ALTER TABLE public.vertical_language_routes ENABLE ROW LEVEL SECURITY;

-- Anyone can read (needed for the public language switcher)
CREATE POLICY "Anyone can read vertical language routes"
  ON public.vertical_language_routes
  FOR SELECT
  USING (true);

-- Only authenticated users can insert/update/delete (admin)
CREATE POLICY "Authenticated users can insert routes"
  ON public.vertical_language_routes
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update routes"
  ON public.vertical_language_routes
  FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete routes"
  ON public.vertical_language_routes
  FOR DELETE
  USING (auth.uid() IS NOT NULL);
