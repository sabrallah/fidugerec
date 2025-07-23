import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  CalculatorIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Comptabilité',
    description: 'Tenue de comptabilité complète, saisie et révision comptable pour tous types d\'entreprises.',
    icon: CalculatorIcon,
    features: ['Saisie comptable', 'Révision des comptes', 'Bilan et compte de résultat', 'Déclarations TVA'],
  },
  {
    name: 'Fiscalité',
    description: 'Optimisation fiscale et accompagnement dans vos déclarations et obligations fiscales.',
    icon: DocumentTextIcon,
    features: ['Déclarations fiscales', 'Optimisation fiscale', 'Contrôle fiscal', 'Conseil en fiscalité'],
  },
  {
    name: 'Conseil aux entreprises',
    description: 'Accompagnement stratégique pour le développement et la gestion de votre entreprise.',
    icon: ChartBarIcon,
    features: ['Analyse financière', 'Prévisionnel', 'Stratégie d\'entreprise', 'Aide à la décision'],
  },
  {
    name: 'Création d\'entreprise',
    description: 'Accompagnement complet dans la création et le développement de votre projet entrepreneurial.',
    icon: UserGroupIcon,
    features: ['Choix du statut juridique', 'Formalités de création', 'Business plan', 'Accompagnement bancaire'],
  },
]

const stats = [
  { name: 'Clients satisfaits', value: '250+' },
  { name: 'Années d\'expérience', value: '15+' },
  { name: 'Dossiers traités', value: '1000+' },
  { name: 'Taux de satisfaction', value: '98%' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
                FiduGerec - Votre Cabinet Fiduciaire de Confiance
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-100 animate-slide-up">
                Expertise comptable, conseil fiscal et accompagnement personnalisé pour faire grandir votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Prendre rendez-vous
                </Link>
                <Link href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  Découvrir nos services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-white text-xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
                    Expertise reconnue depuis 15 ans
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
                    Accompagnement personnalisé
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
                    Outils digitaux modernes
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
                    Disponibilité et réactivité
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Nos Services d'Excellence
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Nous accompagnons les entreprises et les entrepreneurs dans tous les aspects de leur gestion comptable, fiscale et stratégique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-secondary-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à faire le premier pas ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider à optimiser votre gestion d'entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              <PhoneIcon className="h-5 w-5 mr-2 inline" />
              Nous contacter
            </Link>
            <a href="tel:+33123456789" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
