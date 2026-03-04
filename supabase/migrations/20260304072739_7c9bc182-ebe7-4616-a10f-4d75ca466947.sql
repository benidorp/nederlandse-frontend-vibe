UPDATE ai_generated_pages 
SET html_content = REPLACE(
  REPLACE(
    REPLACE(
      REPLACE(html_content, '/src/assets/nicole-working.png', '/images/nicole-working.png'),
      '/src/assets/nicole-nonprofit-clear.png', '/images/nicole-nonprofit-clear.png'
    ),
    '/src/assets/nicole-nonprofit.png', '/images/nicole-nonprofit.png'
  ),
  '/src/assets/stripe-logo.svg', '/images/stripe-logo.svg'
)
WHERE html_content LIKE '%/src/assets/%';