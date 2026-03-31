<script setup>
import profileImg from '../assets/dinii.jpeg';
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center bg-transparent overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-[1400px] mx-auto px-5 py-20 lg:py-0">
      <div class="flex-1 flex justify-center animate-[slideInLeft_1s_ease-out] relative">
        <div class="relative w-[min(350px,70vw)] h-[min(350px,70vw)] md:w-[450px] md:h-[450px] flex items-center justify-center">
          <div class="absolute w-[85%] h-[85%] bg-primary-pink/20 rounded-full blur-2xl animate-float-slow z-0"></div>
          <div class="absolute w-[75%] h-[75%] bg-accent-pink/25 rounded-full blur-xl animate-float-reverse z-0" style="animation-duration: 5s;"></div>
          
          <div class="absolute inset-[-10%] border-[4px] border-primary-pink/10 rounded-[35%] animate-[spin_12s_linear_infinite] z-0"></div>
          <div class="absolute inset-[-5%] border-[2px] border-accent-pink/15 rounded-full animate-[spin_18s_linear_infinite_reverse] z-0"></div>
          
          <div class="relative w-[85%] h-[85%] z-[2]">
            <img :src="profileImg" alt="Dini Ardiningrum" class="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] relative z-[2] border-[6px] border-white shadow-2xl">
          </div>
        </div>
      </div>
      <div class="flex-1 text-center lg:text-left animate-[slideInRight_1s_ease-out] flex flex-col items-center lg:items-start px-2">
        <h3 class="text-deep-pink font-bold mb-2 tracking-[1px] text-[clamp(0.8rem,2vw,1.1rem)]">Halo, Saya</h3>
        <h1 class="text-[clamp(2.5rem,6vw,4rem)] leading-tight mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text-dark via-primary-pink to-text-dark bg-[length:200%_auto] animate-gradient-text">Dini Ardiningrum</h1>
        <h2 class="text-text-light text-[clamp(1.1rem,2.5vw,1.6rem)] font-medium mb-8">| Desainer Kreatif</h2>
        <p class="max-w-[550px] mb-10 text-[clamp(0.95rem,1.8vw,1.1rem)] text-text-light leading-relaxed">
          Mahasiswi Pendidikan Matematika Universitas Siliwangi yang memiliki minat pada pengembangan matematika, multimedia pembelajaran, serta teknologi pendidikan.
        </p>
        <div class="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <a href="#portfolio" class="btn btn-primary text-center px-10 py-4 text-[1rem]">Lihat Portofolio</a>
          <a href="#contact" class="btn btn-outline !ml-0 sm:!ml-4 text-center px-10 py-4 text-[1rem]">Hubungi Saya</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes gradient-text {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-text {
  animation: gradient-text 5s ease infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(20px) scale(0.9); }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 8s ease-in-out infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
