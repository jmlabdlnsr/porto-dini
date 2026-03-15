<template>
  <div>
    <section id="contact" class="bg-gradient-to-b from-white to-soft-pink pt-[100px] pb-20 relative overflow-hidden">
      <div class="absolute w-[450px] h-[450px] bg-soft-pink blur-[100px] rounded-full -top-[200px] -right-[200px] opacity-20 z-[1]"></div>
      
      <div class="max-w-[1100px] mx-auto px-5 relative z-[2]">
        <div class="text-center mb-16">
          <span class="bg-soft-pink text-deep-pink px-4 py-1.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-widest inline-block mb-5 border border-primary-pink/20">Get In Touch</span>
          <h2 class="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-text-dark m-0 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Hubungi <span class="text-primary-pink font-normal">Saya</span></h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div class="text-center lg:text-left">
            <h3 class="text-[2.2rem] text-text-dark font-bold mb-6 leading-tight">Mari Berkolaborasi!</h3>
            <p class="text-[1.05rem] leading-relaxed text-text-light">
              Saya selalu terbuka untuk diskusi mengenai pengembangan media pembelajaran, desain kreatif, atau proyek multimedia pendidikan lainnya. Jangan ragu untuk menyapa melalui salah satu platform di samping.
            </p>
          </div>

          <div class="flex flex-col gap-5 w-full items-center lg:items-start">
            <a v-for="link in contactLinks" :key="link.label" :href="link.href" class="bg-white p-4 md:p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 border border-primary-pink/15 shadow-soft w-full max-w-[350px] box-border group hover:-translate-y-1 hover:border-primary-pink hover:shadow-soft-hover">
              <div class="w-10 h-10 shrink-0 bg-soft-pink text-primary-pink rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-pink group-hover:text-white" v-html="link.icon"></div>
              <div class="overflow-hidden text-left">
                <h4 class="text-[0.75rem] mb-0.5 text-text-light uppercase tracking-widest font-medium">{{ link.label }}</h4>
                <p class="text-[0.95rem] font-bold text-text-dark m-0 truncate">{{ link.value }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-16 pb-8 bg-white border-t border-primary-pink/15 w-full overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-10">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-8 text-center md:text-left">
          <div>
            <span class="text-2xl font-extrabold text-text-dark">Dini <span class="text-primary-pink font-normal">Ardiningrum</span></span>
            <p class="text-[0.85rem] text-text-light mt-1">Mahasiswi Pendidikan Matematika | Desainer Kreatif</p>
          </div>
          <div class="flex gap-4">
            <a v-for="social in socialLinks" :key="social.title" :href="social.href" :title="social.title" class="w-10 h-10 rounded-full bg-soft-pink text-primary-pink flex items-center justify-center transition-all duration-300 hover:bg-primary-pink hover:text-white hover:-translate-y-1" v-html="social.icon"></a>
          </div>
        </div>
        
        <div class="h-px bg-primary-pink/15 mb-8"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-[#999] text-[0.85rem] text-center font-medium">
          <p>© 2026 Dini Ardiningrum. All rights reserved.</p>
          <p>Handcrafted with <span class="text-primary-pink inline-block animate-pulse">❤</span> in Tasikmalaya</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const contactLinks = [
  { label: 'Email', value: 'diniiardiningrum@gmail.com', href: 'mailto:diniiardiningrum@gmail.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>' },
  { label: 'LinkedIn', value: 'Dini Ardiningrum', href: 'https://www.linkedin.com/in/dini-ardiningrum', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>' },
  { label: 'Instagram', value: '@dniard_', href: 'https://www.instagram.com/dniard_?igsh=MTV5M29uc3hoeDM0dg==', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>' },
];

const socialLinks = [
  { title: 'Instagram', href: 'https://www.instagram.com/dniard_?igsh=MTV5M29uc3hoeDM0dg==', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/dini-ardiningrum', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>' },
  { title: 'Email', href: 'mailto:diniiardiningrum@gmail.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>' },
];
</script>
