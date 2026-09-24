const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, '..', 'public'),
  path.join(__dirname, '..', 'public', 'projects'),
];

async function convertImages() {
  for (const dir of directories) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const inputPath = path.join(dir, file);
        const outputFilename = path.basename(file, ext) + '.webp';
        const outputPath = path.join(dir, outputFilename);

        const originalStats = fs.statSync(inputPath);
        
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const savings = (((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(1);
        
        console.log(`Converted: ${file} (${(originalStats.size / 1024).toFixed(1)} KB) -> ${outputFilename} (${(newStats.size / 1024).toFixed(1)} KB) [${savings}% smaller]`);
      }
    }
  }
}

convertImages().catch(console.error);
