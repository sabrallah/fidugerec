import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis').max(50, 'Le prénom ne peut pas dépasser 50 caractères'),
  lastName: z.string().min(1, 'Le nom est requis').max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Le sujet est requis'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  consent: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter la politique de confidentialité'
  })
})

export type ContactFormData = z.infer<typeof contactFormSchema>
