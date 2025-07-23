import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl: _canonicalUrl,
  noIndex = false,
}: SEOProps): Metadata {
  const defaultKeywords = [
    'cabinet fiduciaire',
    'expertise comptable',
    'comptabilité',
    'fiscalité',
    'conseil entreprise',
    'Paris',
    'expert-comptable',
  ]

  const allKeywords = [...defaultKeywords, ...keywords]
  const fullTitle = `${title} | FiduGerec`

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      title: fullTitle,
      description,
      siteName: 'FiduGerec',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Cabinet Fiduciaire - Expertise Comptable',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/og-image.jpg'],
    },
  }
}

export const defaultSEO: Metadata = {
  title: 'FiduGerec - Expertise Comptable & Conseil',
  description: 'Cabinet fiduciaire spécialisé en comptabilité, fiscalité et conseil aux entreprises. Services professionnels pour PME et indépendants.',
  keywords: [
    'cabinet fiduciaire',
    'expertise comptable', 
    'comptabilité',
    'fiscalité',
    'conseil entreprise',
    'Paris',
    'expert-comptable',
    'création entreprise',
    'bilan comptable',
    'déclaration fiscale',
  ],
}
