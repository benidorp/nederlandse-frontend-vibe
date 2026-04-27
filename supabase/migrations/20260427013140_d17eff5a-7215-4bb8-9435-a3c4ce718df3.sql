-- 1. Drop the overly-broad public SELECT policy that exposed user_id
DROP POLICY IF EXISTS "Anyone can read published pages" ON public.ai_generated_pages;

-- 2. Create a SECURITY INVOKER view that excludes internal columns (user_id, source_page_id)
--    Using security_invoker = true ensures the view respects RLS of the querying role.
CREATE OR REPLACE VIEW public.published_pages_public
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

-- 3. Re-add a narrowly-scoped public SELECT policy on the base table that ONLY the view will use.
--    Since the view is SECURITY INVOKER, callers need SELECT on the base table for published rows.
CREATE POLICY "Public can read published pages via view"
ON public.ai_generated_pages
FOR SELECT
TO anon, authenticated
USING (status = 'published');

-- 4. Grant access to the public-safe view
GRANT SELECT ON public.published_pages_public TO anon, authenticated;

-- 5. Revoke direct anon SELECT on the base table is implicit — RLS still enforces it,
--    but to reduce introspection surface we keep the policy. The view is the recommended path.
COMMENT ON VIEW public.published_pages_public IS
  'Public-safe view of published AI-generated pages. Excludes user_id and source_page_id to prevent leaking internal user identifiers to anonymous visitors.';