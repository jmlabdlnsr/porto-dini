<template>
  <section id="achievements" class="bg-white py-[100px] relative overflow-hidden">
    <div class="max-w-[1100px] mx-auto px-5 relative z-10">
      <div class="mb-12 text-left flex flex-col items-start">
        <div class="mb-4">
          <span class="inline-block px-4 py-1.5 bg-soft-pink text-deep-pink rounded-full text-[0.7rem] font-extrabold uppercase tracking-widest border border-primary-pink/20">Honor & Awards</span>
        </div>
        <div class="relative">
          <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] text-text-dark m-0 font-extrabold pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Pencapaian <span class="text-primary-pink">Terpilih</span></h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-5">
        <div class="bento-card lg:col-span-2 lg:row-span-2 bg-ultra-soft group relative">
          <div class="absolute inset-0 bg-white/85 backdrop-blur-[5px] z-[1]"></div>
          
          <div class="relative z-[2] p-8 h-full flex flex-col justify-between">
            <!-- Top Elements -->
            <div class="flex justify-between items-center">
              <span class="font-mono text-sm font-bold text-primary-pink opacity-40">01</span>
              <span class="text-[0.7rem] font-extrabold uppercase px-5 py-1.5 rounded-full shadow-sm" style="background: linear-gradient(135deg, #FFD700, #FDB931); color: #5C4000;">Juara 1</span>
            </div>

            <!-- Title (Left Aligned for consistency) -->
            <div class="my-8">
              <h3 class="text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold text-text-dark leading-tight m-0 group-hover:text-primary-pink transition-colors">
                Lomba Inovasi Digital Mahasiswa FKIP UNSIL
              </h3>
            </div>

            <!-- Bottom Elements -->
            <div class="flex justify-end">
              <span class="font-bold text-[#ccc] text-[0.9rem] font-mono tracking-widest">2025</span>
            </div>
          </div>
          
          <div class="glow-sphere"></div>
        </div>

        <div class="bento-card group">
          <div class="absolute inset-0 bg-white/85 backdrop-blur-[5px] z-[1]"></div>
          <div class="relative z-[2] p-6 h-full flex flex-col justify-between">
            <div class="flex justify-between items-center">
              <span class="font-mono text-xs font-bold text-primary-pink opacity-40">02</span>
              <span class="text-[0.6rem] font-extrabold uppercase px-4 py-1 rounded-full border border-primary-pink/15" style="background: linear-gradient(135deg, #E0E0E0, #BDBDBD); color: #333;">Juara 2</span>
            </div>
            <div class="my-4">
              <h3 class="text-[1.1rem] font-extrabold text-text-dark leading-snug m-0 group-hover:text-primary-pink transition-colors">NSSC 3.0 Bidang Komputer</h3>
            </div>
            <div class="flex justify-end">
              <span class="font-bold text-[#ccc] text-[0.8rem] font-mono">2022</span>
            </div>
          </div>
        </div>

        <div class="bento-card group">
          <div class="absolute inset-0 bg-white/85 backdrop-blur-[5px] z-[1]"></div>
          <div class="relative z-[2] p-6 h-full flex flex-col justify-between">
            <div class="flex justify-between items-center">
              <span class="font-mono text-xs font-bold text-primary-pink opacity-40">03</span>
              <span class="text-[0.65rem] font-extrabold uppercase px-4 py-1 rounded-full shadow-sm" style="background: linear-gradient(135deg, #FFD700, #FDB931); color: #5C4000;">Juara 1</span>
            </div>
            <div class="my-4">
              <h3 class="text-[1.1rem] font-extrabold text-text-dark leading-snug m-0 group-hover:text-primary-pink transition-colors">Lomba Desain Poster Pembelajaran Inovatif</h3>
            </div>
            <div class="flex justify-end">
              <span class="font-bold text-[#ccc] text-[0.8rem] font-mono">2024</span>
            </div>
          </div>
        </div>

        <div class="bento-card lg:col-span-2 group">
          <div class="absolute inset-0 bg-white/85 backdrop-blur-[5px] z-[1]"></div>
          <div class="relative z-[2] p-6 h-full flex flex-col justify-between">
            <div class="flex justify-between items-center">
              <span class="font-mono text-xs font-bold text-primary-pink opacity-40">04</span>
              <span class="text-[0.6rem] font-extrabold uppercase px-4 py-1 rounded-full shadow-sm" style="background: linear-gradient(135deg, #CD7F32, #A0522D); color: white;">Juara 3</span>
            </div>
            <div class="my-2">
              <h3 class="text-[1.2rem] font-extrabold text-text-dark leading-snug m-0 group-hover:text-primary-pink transition-colors">Lomba Film Pendek Entrepreneur Project 8</h3>
            </div>
            <div class="flex justify-end">
              <span class="font-bold text-[#ccc] text-[0.85rem] font-mono">2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bento-card {
  @apply relative rounded-[24px] overflow-hidden border border-primary-pink/15 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] bg-white hover:-translate-y-1 hover:border-primary-pink hover:shadow-soft-hover;
}

.glow-sphere {
  @apply absolute -bottom-20 -right-20 w-[200px] h-[200px] rounded-full z-[1] opacity-40;
  background: radial-gradient(circle, var(--soft-pink) 0%, transparent 70%);
}
</style>
