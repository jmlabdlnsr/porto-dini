<template>
  <section id="hero" class="min-h-screen flex items-center bg-gradient-to-br from-white to-soft-pink overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-[1400px] mx-auto">
      <div class="flex-1 flex justify-center animate-[slideInLeft_1s_ease-out]">
        <div class="relative w-[min(400px,80vw)] h-[min(400px,80vw)] md:w-[400px] md:h-[400px]">
          <div class="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-gradient-to-br from-soft-pink to-accent-pink rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-[1] blur-[30px] opacity-50"></div>
          <img src="/src/assets/dinii.jpeg" alt="Dini Ardiningrum" class="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] relative z-[2] border-[5px] border-white shadow-soft">
        </div>
      </div>
      <div class="flex-1 text-center lg:text-left animate-[slideInRight_1s_ease-out] flex flex-col items-center lg:items-start">
        <h3 class="text-deep-pink font-bold mb-2 tracking-[1px]">Halo, Saya</h3>
        <h1 class="text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4 font-extrabold text-text-dark">Dini Ardiningrum</h1>
        <h2 class="text-text-light text-[clamp(1rem,2.2vw,1.5rem)] font-medium mb-6">| Desainer Kreatif</h2>
        <p class="max-w-[500px] mb-8 text-[clamp(0.85rem,1.5vw,1rem)] text-text-light">
          Mahasiswi Pendidikan Matematika Universitas Siliwangi yang memiliki minat pada pengembangan matematika, multimedia pembelajaran, serta teknologi pendidikan.
        </p>
        <div class="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <a href="#portfolio" class="btn btn-primary text-center">Lihat Portofolio</a>
          <a href="#contact" class="btn btn-outline !ml-0 sm:!ml-4 text-center">Hubungi Saya</a>
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
</style>
