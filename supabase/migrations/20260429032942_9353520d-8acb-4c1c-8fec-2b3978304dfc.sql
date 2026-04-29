-- Switch view back to security_invoker, restore base table policy, but revoke column access to user_id and source_page_id
DROP VIEW IF EXISTS public.published_pages_public;

CREATE VIEW public.published_pages_public
WITH (security_invoker = true) AS
SELECT
  id,
  slug,
  title,
  meta_title,
  meta_description,
  html_content,
  language,
  domain,
  niche,
  status,
  metadata,
  created_at,
  updated_at
FROM public.ai_generated_pages
WHERE status = 'published';

-- Re-create base table policy needed for security_invoker view
CREATE POLICY "Public can read published pages via view"
ON public.ai_generated_pages
FOR SELECT
TO anon, authenticated
USING (status = 'published');

-- Revoke broad SELECT and re-grant only safe columns to anon/authenticated
REVOKE SELECT ON public.ai_generated_pages FROM anon, authenticated;
GRANT SELECT (id, slug, title, meta_title, meta_description, html_content, language, domain, niche, status, metadata, created_at, updated_at)
  ON public.ai_generated_pages TO anon, authenticated;

GRANT SELECT ON public.published_pages_public TO anon, authenticated;

COMMENT ON VIEW public.published_pages_public IS
  'Public-safe view of published AI-generated pages. Column-level grants on the base table prevent exposure of user_id and source_page_id to anon/authenticated.';
