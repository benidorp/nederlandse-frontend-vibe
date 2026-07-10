ALTER TABLE public.gsc_bulk_jobs
  ADD COLUMN IF NOT EXISTS before_snapshot jsonb,
  ADD COLUMN IF NOT EXISTS diff jsonb;