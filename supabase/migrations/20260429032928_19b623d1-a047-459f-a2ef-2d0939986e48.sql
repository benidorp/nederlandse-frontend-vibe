-- Restrict ai_generated_pages so user_id is no longer exposed to anon/authenticated.
-- Drop the broad SELECT policy on the base table.
DROP POLICY IF EXISTS "Public can read published pages via view" ON public.ai_generated_pages;

-- Recreate the public view as SECURITY DEFINER so it can read the base table
-- without relying on a base-table RLS policy that would also expose user_id via direct queries.
DROP VIEW IF EXISTS public.published_pages_public;

CREATE VIEW public.published_pages_public
WITH (security_invoker = false) AS
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

GRANT SELECT ON public.published_pages_public TO anon, authenticated;

COMMENT ON VIEW public.published_pages_public IS
  'Public-safe view of published AI-generated pages. Excludes user_id and source_page_id. Uses security_invoker=false so anon/authenticated callers do not need direct SELECT on the base table, preventing exposure of owner UUIDs.';
