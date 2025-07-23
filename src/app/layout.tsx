import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'FiduGerec - Expertise Comptable & Conseil',
  description: 'Cabinet fiduciaire spécialisé en comptabilité, fiscalité et conseil aux entreprises. Services professionnels pour PME et indépendants.',
  keywords: ['cabinet fiduciaire', 'expertise comptable', 'fiscalité', 'conseil entreprise', 'comptabilité'],
  authors: [{ name: 'FiduGerec' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Cabinet Fiduciaire - Expertise Comptable & Conseil',
    description: 'Cabinet fiduciaire spécialisé en comptabilité, fiscalité et conseil aux entreprises.',
    siteName: 'Cabinet Fiduciaire',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
