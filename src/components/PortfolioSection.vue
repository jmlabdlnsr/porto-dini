<template>
  <section id="portfolio" class="bg-white py-[80px] md:py-[100px] relative overflow-hidden">
    <div class="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center mb-12 md:mb-16 text-center">
        <div class="mb-8 md:mb-10 flex flex-col items-center">
          <span class="bg-soft-pink text-deep-pink px-4 py-1.5 rounded-full text-[0.7rem] md:text-[0.75rem] font-extrabold uppercase tracking-widest inline-block mb-4 border border-primary-pink/20">Showcase</span>
          <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-text-dark m-0 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Karya <span class="text-primary-pink font-normal">Pilihan</span></h2>
        </div>
        
        <div class="w-full max-w-full">
          <div class="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 overflow-x-auto pb-4 px-2 no-scrollbar scroll-smooth -mx-4 sm:mx-0">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="activeCategory = cat"
              class="px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-primary-pink/10 bg-ultra-soft text-text-light text-[0.8rem] md:text-[0.85rem] font-bold cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0 hover:border-primary-pink"
              :class="{ '!bg-primary-pink !text-white border-primary-pink shadow-md scale-105': activeCategory === cat }"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.title" 
          class="relative rounded-[24px] md:rounded-[28px] bg-white border border-primary-pink/15 overflow-hidden transition-all duration-300 group hover:shadow-soft-hover hover:border-primary-pink w-full"
        >
          <div class="flex flex-col h-full">
            <div class="relative w-full aspect-[4/3] overflow-hidden">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[0.6rem] md:text-[0.65rem] font-extrabold text-deep-pink uppercase z-10 shadow-sm border border-soft-pink">{{ item.category }}</div>
            </div>
            <div class="p-5 md:p-6 bg-white flex flex-col flex-grow">
              <h3 class="text-base md:text-lg font-extrabold text-text-dark mb-4 leading-tight group-hover:text-primary-pink transition-colors">{{ item.title }}</h3>
              <div class="mt-auto flex items-center gap-2 text-[0.8rem] md:text-[0.85rem] font-bold text-text-light group-hover:text-primary-pink transition-all">
                <span>Eksplorasi Karya</span>
                <div class="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-soft-pink text-primary-pink group-hover:bg-primary-pink group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" md:width="14" md:height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Import images
import imgI1 from '../assets/ilustrasi/i1.jpeg';
import imgH2 from '../assets/himaptika/h2.jpeg';
import imgG2 from '../assets/gemamatematika/g2.jpeg';
import imgK2 from '../assets/kkn/k2.jpeg';

const categories = ['Semua', 'Desain Grafis', 'Social Media', 'Videografi'];
const activeCategory = ref('Semua');

const portfolioItems = [
  {
    title: 'Desain Poster Pembelajaran',
    category: 'Desain Grafis',
    image: imgI1
  },
  {
    title: 'Konten Media Sosial @himaptikaunsil',
    category: 'Social Media',
    image: imgH2
  },
  {
    title: 'Konten Media Sosial @gemamatematikaunsil',
    category: 'Social Media',
    image: imgG2
  },
  {
    title: 'Konten Media Sosial @kkn113_parigi',
    category: 'Social Media',
    image: imgK2
  }
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') return portfolioItems;
  return portfolioItems.filter(item => item.category === activeCategory.value);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
