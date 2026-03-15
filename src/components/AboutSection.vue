<template>
  <section id="about" class="bg-gradient-to-b from-soft-pink to-white py-[100px] relative overflow-hidden">
    <div class="max-w-[1100px] mx-auto px-5 relative z-[5]">
      <div class="mb-14 text-left">
        <span class="bg-soft-pink text-deep-pink px-4 py-1.5 rounded-full uppercase tracking-[3px] font-bold text-[0.8rem] inline-block mb-5 border border-primary-pink/20">Personal Info</span>
        <h2 class="text-[clamp(2rem,5vw,2.8rem)] font-extrabold text-text-dark m-0">Tentang <span class="text-primary-pink">Saya</span></h2>
        <div class="w-[60px] h-1 bg-gradient-to-r from-primary-pink to-accent-pink mt-4 rounded-full"></div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-stretch">
        <div class="flex flex-col">
          <div class="glass-card p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-center h-full">
            <p class="text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-text-dark mb-6">
              Saya adalah seorang mahasiswi <strong class="text-deep-pink font-bold">Pendidikan Matematika</strong> di Universitas Siliwangi yang memiliki antusiasme tinggi dalam menggabungkan ilmu matematika dengan kreativitas digital.
            </p>
            <p class="text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-text-dark m-0">
              Fokus utama saya terletak pada pengembangan <strong class="text-deep-pink font-bold">media pembelajaran inovatif</strong>, desain grafis, multimedia, dan pemanfaatan teknologi pendidikan untuk menciptakan pengalaman belajar yang lebih menarik dan efektif.
            </p>
          </div>
        </div>

        <div class="h-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <div v-for="info in infoData" :key="info.label" class="bg-white p-[0.8rem_1.2rem] rounded-[18px] flex items-center gap-5 shadow-soft border border-soft-pink/15 transition-all duration-300 hover:translate-x-2.5 hover:border-primary-pink hover:shadow-soft-hover">
              <div class="w-10 h-10 bg-soft-pink text-primary-pink rounded-xl flex items-center justify-center shrink-0" v-html="info.icon">
              </div>
              <div>
                <span class="block text-[0.7rem] uppercase tracking-[1px] text-text-light mb-0.5">{{ info.label }}</span>
                <p class="m-0 font-bold text-text-dark text-[0.9rem]">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute w-[500px] h-[500px] bg-soft-pink blur-[100px] rounded-full -top-[200px] -left-[200px] z-[1] opacity-50"></div>
    <div class="absolute w-[500px] h-[500px] bg-accent-pink blur-[100px] rounded-full top-auto -bottom-[200px] -right-[200px] left-auto z-[1] opacity-20"></div>
  </section>
</template>

<script setup>
const infoData = [
  { label: 'Lokasi', value: 'Sumedang, ID', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' },
  { label: 'Lahir', value: '30 Juli 2005', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>' },
  { label: 'Pendidikan', value: 'S1 Pend. Matematika', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>' },
  { label: 'Status', value: 'Mahasiswi Aktif', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>' },
];
</script>
