import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none text-secondary-600">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Collecte des données personnelles
            </h2>
            <p className="mb-4">
              Dans le cadre de nos services de cabinet fiduciaire, nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations sur votre entreprise</li>
              <li>Messages et communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Finalité du traitement
            </h2>
            <p className="mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Répondre à vos demandes de contact</li>
              <li>Fournir nos services comptables et fiscaux</li>
              <li>Vous tenir informé de nos actualités (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Base légale
            </h2>
            <p className="mb-6">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Votre consentement</strong> pour les communications marketing</li>
              <li><strong>L'exécution du contrat</strong> pour la prestation de nos services</li>
              <li><strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
              <li><strong>Les obligations légales</strong> dans le cadre de la réglementation comptable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Durée de conservation
            </h2>
            <p className="mb-6">
              Vos données sont conservées pendant :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>3 ans</strong> pour les demandes de contact</li>
              <li><strong>10 ans</strong> pour les documents comptables (obligation légale)</li>
              <li><strong>Jusqu'à votre désinscription</strong> pour les communications marketing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Vos droits
            </h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Droit d'accès</strong> : connaître les données que nous détenons sur vous</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : supprimer vos données (sous conditions)</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement (sous conditions)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Exercer vos droits
            </h2>
            <p className="mb-6">
              Pour exercer vos droits, contactez-nous :
            </p>
            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <p className="mb-2">
                <strong>Email :</strong> contact@cabinet-fiduciaire.fr
              </p>
              <p className="mb-2">
                <strong>Courrier :</strong> Cabinet Fiduciaire<br />
                123 Rue de l'Expertise<br />
                75001 Paris
              </p>
              <p>
                <strong>Téléphone :</strong> 01 23 45 67 89
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Sécurité des données
            </h2>
            <p className="mb-6">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>L'accès non autorisé</li>
              <li>La modification non autorisée</li>
              <li>La perte ou la destruction</li>
              <li>La divulgation non autorisée</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Cookies
            </h2>
            <p className="mb-6">
              Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
              Aucun cookie de traçage ou publicitaire n'est utilisé sans votre consentement.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Modifications
            </h2>
            <p className="mb-6">
              Cette politique de confidentialité peut être modifiée. 
              La version la plus récente est toujours disponible sur notre site web.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-8">
              Contact du DPO
            </h2>
            <p className="mb-6">
              Pour toute question relative à la protection de vos données, vous pouvez également contacter la CNIL :
            </p>
            <div className="bg-secondary-50 rounded-lg p-6">
              <p>
                <strong>CNIL</strong><br />
                3 Place de Fontenoy - TSA 80715<br />
                75334 PARIS CEDEX 07<br />
                <a href="https://www.cnil.fr" className="text-primary-600 hover:underline">www.cnil.fr</a>
              </p>
            </div>

            <p className="text-sm text-secondary-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
