CREATE TABLE public.leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  website text,
  service text,
  message text,
  source_page text NOT NULL DEFAULT 'unknown',
  notified boolean NOT NULL DEFAULT false
);

-- leads contains PII and is only written/read by trusted server code (service role).
-- No anon/authenticated access: RLS enabled with no policies denies all public access.
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);