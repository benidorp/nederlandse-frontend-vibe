import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/u, {
      message: "Name contains invalid characters"
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .max(255, { message: "Email must be less than 255 characters" })
    .email({ message: "Invalid email address" }),
  domain: z
    .string()
    .trim()
    .min(1, { message: "Domain is required" })
    .max(255, { message: "Domain must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .max(2000, { message: "Message must be less than 2000 characters" })
    .optional()
    .default("")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ValidationSuccess {
  success: true;
  data: ContactFormData;
}

export interface ValidationError {
  success: false;
  errors: Record<string, string>;
}

export type ValidationResult = ValidationSuccess | ValidationError;

// Sanitize input by removing potentially dangerous characters and excessive whitespace
export const sanitizeInput = (input: string, maxLength: number): string => {
  if (!input) return "";
  
  return input
    .trim()
    .slice(0, maxLength)
    // Remove control characters and null bytes
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Normalize excessive newlines (max 2 consecutive)
    .replace(/(\r?\n){3,}/g, '\n\n')
    // Remove potential script injection attempts
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

// Validate and parse contact form data
export const validateContactForm = (data: {
  name: string;
  email: string;
  domain: string;
  message?: string;
}): ValidationResult => {
  const result = contactFormSchema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors: Record<string, string> = {};
  result.error.errors.forEach((err) => {
    const field = err.path[0] as string;
    errors[field] = err.message;
  });
  
  return { success: false, errors };
};

// Build safe mailto URL with validated and sanitized data
export const buildSafeMailtoUrl = (
  toEmail: string,
  subject: string,
  body: string
): string => {
  // Sanitize and encode all parts
  const sanitizedSubject = sanitizeInput(subject, 200);
  const sanitizedBody = sanitizeInput(body, 3000);
  
  return `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(sanitizedSubject)}&body=${encodeURIComponent(sanitizedBody)}`;
};
