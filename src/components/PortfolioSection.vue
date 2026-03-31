<template>
  <section id="portfolio" class="bg-transparent py-[80px] md:py-[100px] relative overflow-hidden">
    <div class="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center mb-12 md:mb-16 text-center">
        <div class="mb-8 md:mb-10 flex flex-col items-center">
          <span class="bg-soft-pink text-deep-pink px-4 py-1.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-widest inline-block mb-5 border border-primary-pink/20">Showcase</span>
          <h2 class="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-text-dark m-0 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Karya <span class="text-primary-pink font-normal">Pilihan</span></h2>
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.title" 
          @click="openProject(item)"
          class="group relative flex flex-col h-full card-item border-primary-pink/15 overflow-hidden transition-all duration-500 cursor-pointer"
        >
          <div class="relative w-full h-64 md:h-72 overflow-hidden bg-ultra-soft shrink-0">
            <img 
              v-lazy="item.cover" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-0" 
            >
            <div class="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold text-deep-pink uppercase z-10 shadow-sm border border-soft-pink/50">
              {{ item.category }}
            </div>
            
            <div class="absolute inset-0 bg-primary-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-[5]">
              <div class="bg-white/90 p-4 rounded-full shadow-xl transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary-pink">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col flex-grow bg-white border-t border-soft-pink/10 relative z-10">
            <h3 class="text-lg md:text-xl font-extrabold text-text-dark leading-tight group-hover:text-primary-pink transition-colors mb-3">
              {{ item.title }}
            </h3>
            <div class="mt-auto flex items-center justify-between">
              <span class="text-[0.8rem] text-text-light font-bold opacity-60 tracking-wider">{{ item.images.length }} Karya</span>
              <div class="flex items-center gap-2 text-primary-pink font-bold text-sm">
                <span>Lihat Karya</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isModalOpen" class="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          <div class="absolute inset-0 bg-text-dark/95 backdrop-blur-lg" @click="closeModal"></div>
          
          <div class="relative w-full max-w-7xl max-h-[92vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500">
            <div class="px-8 py-6 md:px-12 md:py-8 flex justify-between items-center border-b border-soft-pink/20 shrink-0 bg-white/90 backdrop-blur-md z-10">
              <div class="pr-10">
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-3 py-1 rounded-lg bg-soft-pink text-primary-pink font-black text-[0.6rem] uppercase tracking-widest">{{ selectedProject.category }}</span>
                </div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-black text-text-dark tracking-tight">{{ selectedProject.title }}</h3>
              </div>
              <button 
                @click="closeModal" 
                class="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-soft-pink text-primary-pink flex items-center justify-center hover:bg-primary-pink hover:text-white transition-all shadow-sm active:scale-95 shrink-0 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-90"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div class="p-6 md:p-12 overflow-y-auto custom-scrollbar bg-ultra-soft/30 flex-grow">
              <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                <div 
                  v-for="(img, index) in selectedProject.images" 
                  :key="index" 
                  class="break-inside-avoid rounded-3xl overflow-hidden shadow-soft border-4 border-white transition-all duration-500 hover:shadow-soft-hover hover:-translate-y-2 bg-white group cursor-zoom-in"
                >
                  <img 
                    v-lazy="img" 
                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-0" 
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const ilustrasiImages = Object.values(import.meta.glob('../assets/karya/ilustrasi/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const himaptikaImages = Object.values(import.meta.glob('../assets/karya/himaptika/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const gemamatematikaImages = Object.values(import.meta.glob('../assets/karya/gemamatematika/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const kknImages = Object.values(import.meta.glob('../assets/karya/kkn/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const dapatifyImages = Object.values(import.meta.glob('../assets/karya/dapatify/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const mamamatchaImages = Object.values(import.meta.glob('../assets/karya/mamamatcha/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const tshirtImages = Object.values(import.meta.glob('../assets/karya/tshirt/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));

const categories = ['Semua', 'Desain Grafis', 'Social Media'];
const activeCategory = ref('Semua');

const portfolioItems = [
  {
    title: 'Desain Poster & Ilustrasi',
    category: 'Desain Grafis',
    cover: ilustrasiImages[4] || ilustrasiImages[0], 
    images: ilustrasiImages
  },
  {
    title: 'Dokumentasi & Konten @himaptikaunsil',
    category: 'Social Media',
    cover: himaptikaImages[0],
    images: himaptikaImages
  },
  {
    title: 'Dokumentasi & Konten @gemamatematikaunsil',
    category: 'Social Media',
    cover: gemamatematikaImages[0],
    images: gemamatematikaImages
  },
  {
    title: 'Dokumentasi & Konten @kkn113_parigi',
    category: 'Social Media',
    cover: kknImages[6] || kknImages[0], 
    images: kknImages
  },
  {
    title: 'Konten @dapatify',
    category: 'Social Media',
    cover: dapatifyImages[0],
    images: dapatifyImages
  },
  {
    title: 'Desain MamaMatcha',
    category: 'Desain Grafis',
    cover: mamamatchaImages[2] || mamamatchaImages[0], 
    images: mamamatchaImages
  },
  {
    title: 'Desain Merchandise & T-Shirt',
    category: 'Desain Grafis',
    cover: tshirtImages[0],
    images: tshirtImages
  }
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') return portfolioItems;
  return portfolioItems.filter(item => item.category === activeCategory.value);
});

const isModalOpen = ref(false);
const selectedProject = ref(null);

const openProject = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #fff5f8;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f8a5c2;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #ef87a7;
}
</style>
