<template>
  <section id="experience" class="bg-transparent py-[100px] relative overflow-hidden">
    <div class="w-full max-w-[1800px] mx-auto px-2 md:px-10 relative z-10">
      <div class="text-center mb-20">
        <div class="mb-5">
          <span class="inline-block px-4 py-1.5 bg-soft-pink text-deep-pink rounded-full text-[0.75rem] font-extrabold uppercase tracking-widest border border-primary-pink/20">Journeys</span>
        </div>
        <div class="relative inline-block">
          <h2 class="text-[clamp(2rem,5vw,2.5rem)] text-text-dark m-0 font-extrabold relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Pengalaman <span class="text-primary-pink font-normal">Organisasi</span></h2>
        </div>
      </div>

      <div class="relative w-full mx-auto">
        <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-pink to-transparent -translate-x-1/2 hidden md:block"></div>
        <div class="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-pink to-transparent md:hidden"></div>

        <div v-for="(exp, index) in experiences" :key="index" class="relative mb-12 flex w-full md:w-1/2 pl-[55px] md:pl-0" :class="index % 2 === 0 ? 'md:justify-end md:pr-[30px] md:ml-0' : 'md:justify-start md:pl-[30px] md:ml-1/2'">
          <div 
            class="absolute w-4 h-4 bg-primary-pink border-4 border-white rounded-full z-10 shadow-[0_0_15px_rgba(248,165,194,0.4)] top-9" 
            :class="[
              index % 2 === 0 ? 'md:-right-2 md:left-auto' : 'md:-left-2',
              'left-[12px] md:translate-x-0'
            ]"
          ></div>
          
          <div class="card-item p-6 md:p-8 w-full border border-primary-pink/15 group hover:-translate-y-2 transition-all duration-300">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div class="w-11 h-11 bg-soft-pink text-primary-pink rounded-xl flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span class="text-[0.85rem] font-bold text-deep-pink bg-soft-pink px-3.5 py-1.5 rounded-full whitespace-nowrap">{{ exp.year }}</span>
            </div>
            <h3 class="text-[clamp(1.1rem,2vw,1.25rem)] text-text-dark font-extrabold mb-2">{{ exp.org }}</h3>
            <p class="text-text-light font-medium">{{ exp.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    org: 'Panitia Campion Day SMAN 9 Garut',
    role: 'Seksi Media Branding',
    year: '2023'
  },
  {
    org: 'HIMAPTIKA Universitas Siliwangi',
    role: 'Anggota Divisi Komunikasi dan Informasi',
    year: '2023 - 2024'
  },
  {
    org: 'Panitia Diseminasi Matematika FKIP UNSIL',
    role: 'Seksi Desain, Publikasi, dan Dokumentasi',
    year: '2024'
  },
  {
    org: 'HIMAPTIKA Universitas Siliwangi',
    role: 'Koordinator Divisi Komunikasi dan Informasi',
    year: '2024 - 2025'
  },
  {
    org: 'BPO HIMAPTIKA UNSIL',
    role: 'Deputi Kominfo',
    year: '2026 - sekarang'
  }
];
</script>

<style scoped>
@media (min-width: 768px) {
  .md\:ml-1\/2 {
    margin-left: 50%;
  }
}
</style>
