
CREATE TABLE IF NOT EXISTS public.gsc_inspection_results (
  url text PRIMARY KEY,
  site_url text NOT NULL,
  verdict text,
  coverage_state text,
  indexing_state text,
  robots_txt_state text,
  page_fetch_state text,
  google_canonical text,
  user_canonical text,
  last_crawl_time timestamptz,
  inspection_result_link text,
  error text,
  last_inspected_at timestamptz NOT NULL DEFAULT now(),
  inspect_count integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS gsc_inspection_results_verdict_idx
  ON public.gsc_inspection_results (verdict, last_inspected_at);
CREATE INDEX IF NOT EXISTS gsc_inspection_results_last_inspected_idx
  ON public.gsc_inspection_results (last_inspected_at);

GRANT SELECT ON public.gsc_inspection_results TO authenticated;
GRANT ALL ON public.gsc_inspection_results TO service_role;

ALTER TABLE public.gsc_inspection_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read inspection results"
  ON public.gsc_inspection_results
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
