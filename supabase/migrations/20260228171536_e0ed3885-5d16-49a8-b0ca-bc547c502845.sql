
-- Drop the existing check constraint on job_type
ALTER TABLE public.ai_jobs DROP CONSTRAINT IF EXISTS ai_jobs_job_type_check;

-- Add updated check constraint with all job types
ALTER TABLE public.ai_jobs ADD CONSTRAINT ai_jobs_job_type_check CHECK (
  job_type IN (
    'translate', 'blog', 'meta_optimize', 'alt_text',
    'internal_links', 'code_generate', 'page_improve',
    'create_page', 'clone_page', 'domain_generate',
    'generate_faq', 'schema_markup', 'fix_layout',
    'workspace_chat'
  )
);
