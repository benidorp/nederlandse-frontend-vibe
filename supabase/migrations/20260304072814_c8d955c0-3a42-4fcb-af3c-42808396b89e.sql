UPDATE ai_generated_pages 
SET html_content = REGEXP_REPLACE(
  html_content, 
  '/src/assets/([^"]*)', 
  '/images/\1', 
  'g'
)
WHERE html_content LIKE '%/src/assets/%';