const fs = require('fs');
const path = require('path');

// Fonction pour corriger les entités HTML dans un fichier
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remplacer les entités HTML malformées
    content = content.replace(/&apos;/g, "'");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Corrigé: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Erreur lors de la correction de ${filePath}:`, error.message);
  }
}

// Liste des fichiers à corriger
const filesToFix = [
  'src/components/Footer.tsx',
  'src/app/services/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/a-propos/page.tsx',
  'src/lib/utils.ts'
];

console.log('🔧 Correction des entités HTML malformées...\n');

filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`⚠️ Fichier non trouvé: ${file}`);
  }
});

console.log('\n✅ Correction terminée !');
