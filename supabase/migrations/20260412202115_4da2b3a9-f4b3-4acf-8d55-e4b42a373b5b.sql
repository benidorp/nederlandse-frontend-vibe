-- Fix: Add owner-scoped UPDATE and DELETE policies for ai_jobs
CREATE POLICY "Users can update own ai_jobs"
ON public.ai_jobs
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own ai_jobs"
ON public.ai_jobs
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);
