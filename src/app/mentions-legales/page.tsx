import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Éditeur du site
            </h2>
            <p className="text-secondary-600 mb-4">
              <strong>Raison sociale :</strong> Cabinet Fiduciaire SAS<br />
              <strong>Adresse :</strong> 123 Rue de l'Expertise, 75001 Paris<br />
              <strong>Téléphone :</strong> 01 23 45 67 89<br />
              <strong>Email :</strong> contact@cabinet-fiduciaire.fr<br />
              <strong>SIRET :</strong> 123 456 789 00012<br />
              <strong>Code APE :</strong> 6920Z<br />
              <strong>TVA Intracommunautaire :</strong> FR12345678901
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Directeur de publication
            </h2>
            <p className="text-secondary-600 mb-4">
              Marie Dubois, Expert-Comptable Associée
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Hébergement
            </h2>
            <p className="text-secondary-600 mb-4">
              Le site est hébergé par :<br />
              OVH SAS<br />
              2 rue Kellermann - 59100 Roubaix - France<br />
              Téléphone : 1007
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Propriété intellectuelle
            </h2>
            <p className="text-secondary-600 mb-4">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est protégé par le droit d'auteur. 
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Cabinet Fiduciaire.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Responsabilité
            </h2>
            <p className="text-secondary-600 mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
              mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui paraît être un 
              dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@cabinet-fiduciaire.fr, 
              en décrivant le problème de la manière la plus précise possible.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Droit applicable et attribution de juridiction
            </h2>
            <p className="text-secondary-600 mb-4">
              Tout litige en relation avec l'utilisation du site www.cabinet-fiduciaire.fr est soumis au droit français. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Crédits
            </h2>
            <p className="text-secondary-600 mb-4">
              Conception et développement : Cabinet Fiduciaire<br />
              Réalisation technique : Développement interne
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
