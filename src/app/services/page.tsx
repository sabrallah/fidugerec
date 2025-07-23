import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  CalculatorIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 'comptabilite',
    name: 'Comptabilité',
    description: 'Tenue de comptabilité complète adaptée à votre secteur d\'activité',
    icon: CalculatorIcon,
    features: [
      'Saisie comptable quotidienne',
      'Révision et validation des comptes',
      'Établissement des bilans et comptes de résultat',
      'Déclarations de TVA périodiques',
      'Lettrage et rapprochements bancaires',
      'Analyse des écarts et conseil en gestion',
    ],
    detailedDescription: 'Notre équipe d\'experts-comptables assure la tenue complète de votre comptabilité avec rigueur et précision. Nous utilisons les derniers outils digitaux pour optimiser vos processus comptables.',
  },
  {
    id: 'fiscalite',
    name: 'Fiscalité',
    description: 'Optimisation fiscale et accompagnement dans vos obligations',
    icon: DocumentTextIcon,
    features: [
      'Déclarations fiscales annuelles',
      'Optimisation de la charge fiscale',
      'Accompagnement en contrôle fiscal',
      'Conseil en fiscalité internationale',
      'Gestion des crédits d\'impôt',
      'Veille juridique et fiscale permanente',
    ],
    detailedDescription: 'Nous vous accompagnons dans l\'optimisation de votre fiscalité tout en respectant la législation en vigueur. Notre expertise vous permet de sécuriser vos déclarations et réduire votre charge fiscale.',
  },
  {
    id: 'conseil',
    name: 'Conseil aux entreprises',
    description: 'Accompagnement stratégique pour le développement de votre activité',
    icon: ChartBarIcon,
    features: [
      'Analyse financière approfondie',
      'Élaboration de prévisionnels',
      'Conseil en stratégie d\'entreprise',
      'Aide à la prise de décision',
      'Optimisation de la rentabilité',
      'Accompagnement dans les projets de croissance',
    ],
    detailedDescription: 'Notre mission est de vous accompagner dans vos prises de décisions stratégiques. Nous analysons votre situation financière et vous proposons des solutions adaptées à vos objectifs.',
  },
  {
    id: 'creation',
    name: 'Création d\'entreprise',
    description: 'Accompagnement complet dans votre projet entrepreneurial',
    icon: UserGroupIcon,
    features: [
      'Aide au choix du statut juridique',
      'Formalités de création complètes',
      'Élaboration du business plan',
      'Accompagnement bancaire',
      'Conseil en financement',
      'Suivi post-création',
    ],
    detailedDescription: 'De l\'idée à la concrétisation, nous vous accompagnons dans toutes les étapes de création de votre entreprise. Notre expertise vous garantit un lancement dans les meilleures conditions.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nos Services d'Excellence
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Une gamme complète de services comptables, fiscaux et de conseil pour accompagner votre réussite
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-primary-50 rounded-2xl p-8">
                    <service.icon className="h-12 w-12 text-primary-600 mb-6" />
                    <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                      {service.name}
                    </h2>
                    <p className="text-lg text-secondary-600 mb-6">
                      {service.detailedDescription}
                    </p>
                    <p className="text-secondary-700 font-medium mb-4">
                      Ce que nous faisons pour vous :
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-secondary-100">
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                      Pourquoi choisir notre expertise en {service.name.toLowerCase()} ?
                    </h3>
                    <div className="space-y-4 text-secondary-600">
                      <p>
                        Fort de plus de 15 ans d'expérience, notre cabinet vous garantit un accompagnement personnalisé et des solutions adaptées à votre secteur d'activité.
                      </p>
                      <p>
                        Nous utilisons les derniers outils digitaux pour optimiser nos processus et vous faire bénéficier d'un service de qualité, rapide et sécurisé.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4 mt-6">
                        <p className="text-primary-700 font-medium">
                          💡 Le saviez-vous ? Une bonne gestion {service.name.toLowerCase()} peut vous faire économiser jusqu'à 20% sur vos charges annuelles.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contact" className="btn-primary inline-flex items-center">
                        Demander un devis
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <a href="tel:+33123456789" className="btn-secondary">
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
