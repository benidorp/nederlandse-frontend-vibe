
-- Allow anyone to read published pages (public visitors)
CREATE POLICY "Anyone can read published pages"
ON public.ai_generated_pages
FOR SELECT
USING (status = 'published');
