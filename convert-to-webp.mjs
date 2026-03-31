import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';

async function convertToWebp() {
  console.log('🚀 Memulai konversi gambar ke WebP...');
  
  // Mencari semua file png, jpg, jpeg
  const files = await glob(`${assetsDir}/**/*.{png,jpg,jpeg}`, { posix: true });
  
  console.log(`Ditemukan ${files.length} gambar untuk dikonversi.`);

  for (const file of files) {
    const ext = path.extname(file);
    const output = file.replace(ext, '.webp');

    try {
      await sharp(file)
        .webp({ quality: 75 }) // Kualitas 75 biasanya sudah sangat bagus dan sangat ringan
        .toFile(output);
      
      console.log(`✅ Berhasil: ${file} -> ${output}`);
      
      // Hapus file asli setelah berhasil dikonversi
      fs.unlinkSync(file);
    } catch (err) {
      console.error(`❌ Gagal mengonversi ${file}:`, err);
    }
  }

  console.log('\n✨ Konversi selesai! Semua gambar kini menggunakan format WebP.');
}

convertToWebp();
