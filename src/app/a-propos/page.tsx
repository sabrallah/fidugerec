import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Expertise',
    description: 'Plus de 15 ans d\'expérience dans le conseil comptable et fiscal',
    icon: AcademicCapIcon,
  },
  {
    name: 'Confiance',
    description: 'Relation de transparence et de confidentialité avec nos clients',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Proximité',
    description: 'Accompagnement personnalisé et écoute attentive de vos besoins',
    icon: HeartIcon,
  },
  {
    name: 'Excellence',
    description: 'Recherche constante de la qualité dans nos prestations',
    icon: TrophyIcon,
  },
]

const team = [
  {
    name: 'Marie Dubois',
    role: 'Expert-Comptable Associée',
    description: 'Diplômée de l\'INTEC, Marie accompagne les entreprises depuis plus de 12 ans dans leur développement comptable et fiscal.',
    specialties: ['Audit et révision', 'Fiscalité des entreprises', 'Consolidation']
  },
  {
    name: 'Jean-Pierre Martin',
    role: 'Conseiller Fiscal Senior',
    description: 'Fort de 10 ans d\'expérience, Jean-Pierre se spécialise dans l\'optimisation fiscale et l\'accompagnement des contrôles fiscaux.',
    specialties: ['Optimisation fiscale', 'Contrôle fiscal', 'Fiscalité internationale']
  },
  {
    name: 'Sophie Leroy',
    role: 'Consultante en Création d\'Entreprise',
    description: 'Passionnée par l\'entrepreneuriat, Sophie accompagne les porteurs de projets dans toutes les étapes de création.',
    specialties: ['Business plan', 'Financement', 'Statuts juridiques']
  },
]

const certifications = [
  'Ordre des Experts-Comptables',
  'Compagnie Nationale des Commissaires aux Comptes',
  'Certification Qualité ISO 9001',
  'Membre de l\'ECF (Expertise Comptable France)',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              À propos de nous
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Un cabinet fiduciaire moderne alliant expertise traditionnelle et innovation technologique
            </p>
          </div>
        </div>
      </section>

      {/* Histoire du cabinet */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-secondary-600">
                <p>
                  Fondé en 2009, notre cabinet fiduciaire s'est construit autour d'une vision simple : 
                  offrir un accompagnement comptable et fiscal de qualité, accessible et humain.
                </p>
                <p>
                  Au final, ce qui nous distingue, c'est notre approche pragmatique. Nous ne cherchons 
                  pas à compliquer les choses, mais à vous apporter des solutions concrètes qui 
                  fonctionnent vraiment pour votre entreprise.
                </p>
                <p>
                  Aujourd'hui, nous accompagnons plus de 250 clients, des startups aux PME établies, 
                  dans tous les secteurs d'activité. Notre croissance s'est faite naturellement, 
                  grâce à la confiance de nos clients et à notre engagement qualité.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Nos Chiffres Clés
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">250+</div>
                  <div className="text-sm text-primary-700">Clients accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-primary-700">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-sm text-primary-700">Taux de satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-sm text-primary-700">Dossiers traités</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre relation avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.name}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Des professionnels expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-24"></div>
                <div className="p-6 -mt-12">
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <UsersIcon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-secondary-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary-900 section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Nos Certifications
            </h2>
            <p className="text-xl text-secondary-300 mb-12 max-w-3xl mx-auto">
              Gage de notre professionnalisme et de notre engagement qualité
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div key={cert} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <ShieldCheckIcon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <p className="text-white text-sm font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut vous aider à développer votre entreprise 
            en toute sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Nous rencontrer
            </Link>
            <Link href="/services" className="btn-secondary">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
