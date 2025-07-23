import Link from 'next/link'

const navigation = {
  services: [
    { name: 'Comptabilité', href: '/services#comptabilite' },
    { name: 'Fiscalité', href: '/services#fiscalite' },
    { name: 'Conseil aux entreprises', href: '/services#conseil' },
    { name: 'Création d\'entreprise', href: '/services#creation' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ],
  contact: [
    { name: 'Prendre rendez-vous', href: '/contact' },
    { name: 'Nous contacter', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              FiduGerec
            </h3>
            <p className="text-secondary-300 text-sm leading-6">
              Votre partenaire de confiance pour la comptabilité, la fiscalité et le conseil aux entreprises.
            </p>
            <div className="text-secondary-300 text-sm">
              <p>9 rue Entrecasteaux</p>
              <p>Boulevard Zerktouni 1er étage</p>
              <p>Casablanca</p>
              <p className="mt-2">
                <a href="tel:0522485602" className="hover:text-white transition-colors">
                  0522485602
                </a>
              </p>
              <p>
                <a href="mailto:contact@fidugerec.ma" className="hover:text-white transition-colors">
                  contact@fidugerec.ma
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Nos Services
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Légal
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {new Date().getFullYear()} FiduGerec. Tous droits réservés.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-secondary-400 text-sm">
                Développé avec expertise et passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
