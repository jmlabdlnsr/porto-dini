<template>
  <section id="portfolio" class="bg-white py-[100px] relative overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="flex flex-col items-center mb-16 text-center">
        <div class="mb-10 flex flex-col items-center">
          <span class="bg-soft-pink text-deep-pink px-[18px] py-1.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-widest inline-block mb-[1.2rem] border border-primary-pink/20">Showcase</span>
          <h2 class="text-[clamp(2rem,5vw,3rem)] font-extrabold text-text-dark m-0 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Karya <span class="text-primary-pink font-normal">Pilihan</span></h2>
        </div>
        
        <div class="w-full overflow-hidden">
          <div class="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto pb-4 px-2 no-scrollbar scroll-smooth">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="activeCategory = cat"
              class="px-6 py-2.5 rounded-full border border-primary-pink/10 bg-ultra-soft text-text-light text-[0.85rem] font-bold cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0"
              :class="{ '!bg-primary-pink !text-white border-primary-pink shadow-md scale-105': activeCategory === cat }"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.title" 
          class="relative rounded-[28px] bg-white border border-primary-pink/15 overflow-hidden transition-all duration-300 group hover:shadow-soft-hover hover:border-primary-pink"
        >
          <div class="flex flex-col h-full">
            <div class="relative w-full aspect-[4/3] overflow-hidden">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" loading="lazy">
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[0.65rem] font-extrabold text-deep-pink uppercase z-10 shadow-sm border border-soft-pink">{{ item.category }}</div>
            </div>
            <div class="p-6 bg-white">
              <h3 class="text-lg font-extrabold text-text-dark mb-4 leading-tight group-hover:text-primary-pink transition-colors">{{ item.title }}</h3>
              <div class="flex items-center gap-2 text-[0.85rem] font-bold text-text-light group-hover:text-primary-pink transition-all">
                <span>Eksplorasi Karya</span>
                <div class="flex items-center justify-center w-7 h-7 rounded-full bg-soft-pink text-primary-pink group-hover:bg-primary-pink group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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

const categories = ['Semua', 'Desain Grafis', 'Social Media', 'Videografi'];
const activeCategory = ref('Semua');

const portfolioItems = [
  {
    title: 'Desain Poster Pembelajaran',
    category: 'Desain Grafis',
    image: '/src/assets/ilustrasi/i1.jpeg'
  },
  {
    title: 'Konten Media Sosial @himaptikaunsil',
    category: 'Social Media',
    image: '/src/assets/himaptika/h2.jpeg'
  },
  {
    title: 'Konten Media Sosial @gemamatematikaunsil',
    category: 'Social Media',
    image: '/src/assets/gemamatematika/g2.jpeg'
  },
  {
    title: 'Konten Media Sosial @kkn113_parigi',
    category: 'Social Media',
    image: '/src/assets/kkn/k2.jpeg'
  },
  {
    title: 'Video Project Entrepreneur',
    category: 'Videografi',
    image: 'https://via.placeholder.com/600x450/fff5f8/f8a5c2?text=Video+Production'
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

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
