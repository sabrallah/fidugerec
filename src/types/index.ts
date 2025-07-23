import { ComponentType, SVGProps } from 'react'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  consent: boolean
}

export interface ServiceData {
  id: string
  name: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  features: string[]
  detailedDescription?: string
}

export interface TeamMember {
  name: string
  role: string
  description: string
  specialties: string[]
  image?: string
}

export interface CompanyValue {
  name: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}
