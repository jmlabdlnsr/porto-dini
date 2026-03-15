<template>
  <section id="skills" class="bg-white py-[100px] relative">
    <div class="max-w-[1000px] mx-auto px-5">
      <div class="text-center mb-16">
        <div class="mb-5">
          <span class="bg-soft-pink text-deep-pink px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[0.75rem] inline-block border border-primary-pink/20">Expertise</span>
        </div>
        <div class="relative inline-block">
          <h2 class="text-[clamp(1.8rem,5vw,2.5rem)] font-extrabold text-text-dark m-0 pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-1 after:bg-gradient-to-r after:from-primary-pink after:to-accent-pink after:rounded-full">Keahlian <span class="text-primary-pink font-normal">& Kompetensi</span></h2>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-5">
        <div v-for="(skill, index) in skills" :key="index" class="bg-white border border-primary-pink/15 px-6 py-3 rounded-full flex items-center gap-4 transition-all duration-300 shadow-soft hover:border-primary-pink hover:-translate-y-1 hover:shadow-soft-hover group shrink-0">
          <div class="flex items-center justify-center text-primary-pink bg-soft-pink w-9 h-9 rounded-full transition-colors duration-300 group-hover:bg-primary-pink group-hover:text-white shrink-0">
            <svg v-if="skill.name === 'Desain Grafis'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M14 11l-4-4"></path></svg>
            <svg v-else-if="skill.name === 'Fotografi'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <svg v-else-if="skill.name === 'Videografi'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            <svg v-else-if="skill.name === 'Public Speaking'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </div>
          <div class="flex items-center">
            <h3 class="text-base font-bold text-text-dark m-0 whitespace-nowrap">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Desain Grafis' },
  { name: 'Fotografi' },
  { name: 'Videografi' },
  { name: 'Public Speaking' },
  { name: 'Kreativitas' }
];
</script>
