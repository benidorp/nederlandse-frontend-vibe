
CREATE TABLE public.gsc_bulk_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  status text NOT NULL DEFAULT 'running',
  total int NOT NULL DEFAULT 0,
  processed int NOT NULL DEFAULT 0,
  indexed int NOT NULL DEFAULT 0,
  not_indexed int NOT NULL DEFAULT 0,
  errors int NOT NULL DEFAULT 0,
  sitemaps_resubmitted jsonb,
  error_message text,
  started_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz
);
GRANT SELECT ON public.gsc_bulk_jobs TO authenticated;
GRANT ALL ON public.gsc_bulk_jobs TO service_role;
ALTER TABLE public.gsc_bulk_jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view bulk jobs" ON public.gsc_bulk_jobs
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.seo_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  total int NOT NULL DEFAULT 0,
  passed int NOT NULL DEFAULT 0,
  warned int NOT NULL DEFAULT 0,
  failed int NOT NULL DEFAULT 0,
  duration_ms int,
  results jsonb NOT NULL
);
GRANT SELECT ON public.seo_reports TO authenticated;
GRANT ALL ON public.seo_reports TO service_role;
ALTER TABLE public.seo_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view seo reports" ON public.seo_reports
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX seo_reports_created_at_idx ON public.seo_reports (created_at DESC);
