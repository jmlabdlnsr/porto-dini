<template>
  <header>
    <nav 
      class="fixed top-0 left-0 w-full z-[1010] transition-all duration-500"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-7'"
    >
      <div class="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-primary-pink tracking-tight relative z-[1020]">Dini.</a>

        <div class="hidden md:flex items-center gap-10">
          <a 
            v-for="link in navLinks" 
            :key="link.href"
            :href="link.href" 
            class="text-[0.95rem] font-semibold text-text-dark hover:text-primary-pink transition-all relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-pink transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl relative z-[1020] transition-all active:scale-90"
        >
          <div class="w-6 h-5 flex flex-col justify-between relative">
            <span class="w-full h-0.5 bg-text-dark rounded-full transition-all duration-300" :class="{ 'rotate-45 translate-y-[9px] bg-primary-pink': isMobileMenuOpen }"></span>
            <span class="w-full h-0.5 bg-text-dark rounded-full transition-all duration-300" :class="{ 'opacity-0 scale-0': isMobileMenuOpen }"></span>
            <span class="w-full h-0.5 bg-text-dark rounded-full transition-all duration-300" :class="{ '-rotate-45 -translate-y-[9px] bg-primary-pink': isMobileMenuOpen }"></span>
          </div>
        </button>
      </div>
    </nav>

    <div 
      class="fixed inset-0 z-[1005] md:hidden transition-all duration-300"
      :class="isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'"
    >
      <div @click="isMobileMenuOpen = false" class="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"></div>
      
      <div 
        class="absolute top-0 right-0 h-full w-[280px] bg-white p-8 pt-32 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform shadow-2xl"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col gap-8">
          <a 
            v-for="(link, index) in navLinks" 
            :key="link.href"
            :href="link.href" 
            @click="isMobileMenuOpen = false"
            class="text-xl font-bold text-text-dark hover:text-primary-pink transition-all duration-300 relative group w-fit"
            :style="{ transitionDelay: isMobileMenuOpen ? (index * 50) + 150 + 'ms' : '0ms' }"
            :class="isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-primary-pink transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Prestasi', href: '#achievements' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Karya', href: '#portfolio' },
  { label: 'Kontak', href: '#contact' },
];

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<style scoped>
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
</style>
