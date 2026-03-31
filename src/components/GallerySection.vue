<template>
  <section id="gallery" class="bg-transparent py-[40px] md:py-[60px] overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 mb-8 text-center">
      <span class="bg-soft-pink text-deep-pink px-4 py-1 rounded-full text-[0.7rem] font-extrabold uppercase tracking-widest inline-block mb-4 border border-primary-pink/20">Moment & Memories</span>
      <h2 class="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-text-dark m-0 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Galeri <span class="text-primary-pink font-normal">Kegiatan</span></h2>
    </div>

    <div class="relative flex overflow-hidden group">
      <div class="flex gap-3 animate-scroll-left whitespace-nowrap py-1">
        <div 
          v-for="(img, index) in [...galleryImages, ...galleryImages]" 
          :key="index" 
          class="inline-block w-[200px] md:w-[250px] h-[120px] md:h-[150px] shrink-0 rounded-xl overflow-hidden shadow-soft border-2 border-white transition-transform duration-500 hover:scale-[1.03] bg-white"
        >
          <img 
            v-lazy="img" 
            class="w-full h-full object-cover opacity-0 transition-opacity duration-1000" 
            alt="Kegiatan Dini"
          >
        </div>
      </div>
    </div>
    
    <div class="relative flex overflow-hidden group mt-1">
      <div class="flex gap-3 animate-scroll-right whitespace-nowrap py-1">
        <div 
          v-for="(img, index) in [...reversedGallery, ...reversedGallery]" 
          :key="index" 
          class="inline-block w-[200px] md:w-[250px] h-[120px] md:h-[150px] shrink-0 rounded-xl overflow-hidden shadow-soft border-2 border-white transition-transform duration-500 hover:scale-[1.03] bg-white"
        >
          <img 
            v-lazy="img" 
            class="w-full h-full object-cover opacity-0 transition-opacity duration-1000" 
            alt="Kegiatan Dini"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const galleryImages = Object.values(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));

const reversedGallery = computed(() => [...galleryImages].reverse());
</script>

<style scoped>
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50%)); }
}

@keyframes scroll-right {
  0% { transform: translateX(calc(-50%)); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
  width: max-content;
}

.animate-scroll-right {
  animation: scroll-right 45s linear infinite;
  width: max-content;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}
</style>
