import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.join('.', 'public/persona');
const outDir = path.join('.', 'public/resized');

// Création du dossier de sortie s'il n'existe pas
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Parcours de toutes les images du dossier source
fs.readdirSync(srcDir).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
    const inputPath = path.join(srcDir, file);
    const outputPath = path.join(outDir, file);

    try {
      // Redimensionnement à 1000px de largeur en gardant le ratio
      await sharp(inputPath)
        .resize({ width: 1000 })
        .toFile(outputPath);

      console.log(`✅ ${file} redimensionnée avec succès`);
    } catch (err) {
      console.error(`❌ Erreur avec ${file} :`, err);
    }
  }
});