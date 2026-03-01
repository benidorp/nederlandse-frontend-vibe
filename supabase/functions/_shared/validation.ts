// Shared input validation utilities for edge functions

const MAX_CONTENT_LENGTH = 50000; // ~12,500 words
const MAX_STRING_FIELD = 255;
const MAX_KEYWORDS_LENGTH = 1000;

const VALID_JOB_TYPES = [
  "translate", "blog", "meta_optimize", "alt_text", "internal_links",
  "code_generate", "page_improve", "create_page", "clone_page",
  "domain_generate", "generate_faq", "schema_markup", "fix_layout",
  "workspace_chat",
];

const DOMAIN_REGEX = /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/i;

export function validateContentInput(content: unknown): string | null {
  if (typeof content === "string") {
    if (content.length > MAX_CONTENT_LENGTH) return `Content exceeds maximum length of ${MAX_CONTENT_LENGTH} characters`;
    if (content.trim().length === 0) return "Content cannot be empty";
    return null;
  }
  if (typeof content === "object" && content !== null) {
    const serialized = JSON.stringify(content);
    if (serialized.length > MAX_CONTENT_LENGTH) return `Content exceeds maximum length of ${MAX_CONTENT_LENGTH} characters`;
    return null;
  }
  return "Content must be a string or object";
}

export function validateJobType(jobType: unknown): string | null {
  if (typeof jobType !== "string") return "jobType must be a string";
  if (!VALID_JOB_TYPES.includes(jobType)) return `Invalid jobType. Must be one of: ${VALID_JOB_TYPES.join(", ")}`;
  return null;
}

export function validateLanguage(language: unknown): string | null {
  if (language === undefined || language === null) return null;
  if (typeof language !== "string") return "language must be a string";
  if (language.length > 10) return "Invalid language code";
  if (!/^[a-z]{2}(-[A-Z]{2})?$/i.test(language)) return "Invalid language code format (expected e.g. 'en', 'nl', 'pt-BR')";
  return null;
}

export function validateDomain(domain: unknown): string | null {
  if (domain === undefined || domain === null || domain === "") return null;
  if (typeof domain !== "string") return "domain must be a string";
  if (domain.length > MAX_STRING_FIELD) return "Domain too long";
  if (!DOMAIN_REGEX.test(domain)) return "Invalid domain format";
  return null;
}

export function validateStringField(value: unknown, fieldName: string, maxLen = MAX_STRING_FIELD): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") return `${fieldName} must be a string`;
  if (value.length > maxLen) return `${fieldName} exceeds maximum length of ${maxLen} characters`;
  return null;
}

export function validateApiKey(apiKey: unknown): string | null {
  if (typeof apiKey !== "string") return "apiKey must be a string";
  if (apiKey.length < 10) return "API key too short";
  if (apiKey.length > 500) return "API key too long";
  return null;
}

export function validateProvider(provider: unknown): string | null {
  if (typeof provider !== "string") return "provider must be a string";
  const validProviders = ["openai", "claude", "custom", "lovable"];
  if (!validProviders.includes(provider)) return `Invalid provider. Must be one of: ${validProviders.join(", ")}`;
  return null;
}
