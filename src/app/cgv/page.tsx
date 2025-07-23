import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">
            Conditions Générales de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none text-secondary-600">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 1 - Objet
            </h2>
            <p className="mb-6">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre 
              Cabinet Fiduciaire et ses clients pour la fourniture de services d'expertise comptable, 
              de conseil fiscal et de services connexes.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 2 - Prestations
            </h2>
            <p className="mb-4">Nos prestations comprennent notamment :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Tenue de comptabilité</li>
              <li>Établissement des comptes annuels</li>
              <li>Déclarations fiscales et sociales</li>
              <li>Conseil en gestion et fiscalité</li>
              <li>Accompagnement à la création d'entreprise</li>
              <li>Formation et assistance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 3 - Commande et acceptation
            </h2>
            <p className="mb-6">
              Toute commande de prestations fait l'objet d'un devis détaillé. 
              L'acceptation du devis par le client vaut commande ferme et définitive. 
              Le client reconnaît avoir reçu de Cabinet Fiduciaire toutes les informations 
              nécessaires à sa prise de décision.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 4 - Prix et modalités de paiement
            </h2>
            <p className="mb-4">
              Les prix sont exprimés en euros, hors taxes. Ils peuvent être révisés annuellement.
            </p>
            <p className="mb-4">
              <strong>Modalités de paiement :</strong>
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Paiement à 30 jours fin de mois par défaut</li>
              <li>Prélèvement automatique possible</li>
              <li>Virement bancaire accepté</li>
              <li>Pénalités de retard : 3 fois le taux d'intérêt légal</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 5 - Obligations du client
            </h2>
            <p className="mb-4">Le client s'engage à :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fournir tous les documents nécessaires dans les délais convenus</li>
              <li>S'assurer de l'exactitude des informations transmises</li>
              <li>Informer Cabinet Fiduciaire de tout changement important</li>
              <li>Respecter les échéances de paiement</li>
              <li>Faciliter l'accès aux locaux et aux documents</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 6 - Obligations de Cabinet Fiduciaire
            </h2>
            <p className="mb-4">Cabinet Fiduciaire s'engage à :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Respecter les règles déontologiques de la profession</li>
              <li>Assurer la confidentialité des informations clients</li>
              <li>Respecter les délais convenus</li>
              <li>Informer le client de toute difficulté rencontrée</li>
              <li>Maintenir ses compétences à jour</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 7 - Responsabilité
            </h2>
            <p className="mb-6">
              Cabinet Fiduciaire dispose d'une assurance responsabilité civile professionnelle. 
              Sa responsabilité est limitée aux fautes qui lui sont directement imputables dans 
              l'exercice de sa mission. Elle ne peut excéder le montant des honoraires perçus 
              pour la mission concernée.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 8 - Durée et résiliation
            </h2>
            <p className="mb-6">
              Les contrats sont conclus pour une durée indéterminée, sauf mention contraire. 
              Ils peuvent être résiliés par chacune des parties moyennant un préavis de 3 mois 
              par lettre recommandée avec accusé de réception.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 9 - Protection des données
            </h2>
            <p className="mb-6">
              Cabinet Fiduciaire s'engage à respecter la réglementation en vigueur concernant 
              la protection des données personnelles, notamment le RGPD. 
              Les modalités de traitement sont décrites dans notre politique de confidentialité.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 10 - Propriété intellectuelle
            </h2>
            <p className="mb-6">
              Tous les documents, méthodes et savoir-faire développés par Cabinet Fiduciaire 
              restent sa propriété exclusive. Le client dispose d'un droit d'usage dans le 
              cadre de la mission qui lui est confiée.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 11 - Règlement des litiges
            </h2>
            <p className="mb-6">
              En cas de litige, les parties privilégient la résolution amiable. 
              À défaut, les tribunaux de Paris sont seuls compétents, même en cas de pluralité de défendeurs 
              ou d'appel en garantie.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Article 12 - Droit applicable
            </h2>
            <p className="mb-6">
              Les présentes CGV sont soumises au droit français. 
              Toute modification doit faire l'objet d'un avenant écrit signé par les deux parties.
            </p>

            <div className="bg-primary-50 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-primary-800 mb-2">
                Informations de contact
              </h3>
              <p className="text-primary-700">
                <strong>Cabinet Fiduciaire</strong><br />
                123 Rue de l'Expertise<br />
                75001 Paris<br />
                Téléphone : 01 23 45 67 89<br />
                Email : contact@cabinet-fiduciaire.fr
              </p>
            </div>

            <p className="text-sm text-secondary-500 mt-8">
              Version en vigueur depuis le {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
