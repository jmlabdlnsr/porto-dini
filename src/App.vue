<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import GallerySection from './components/GallerySection.vue'
import AchievementSection from './components/AchievementSection.vue'
import SkillSection from './components/SkillSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="app-container relative min-h-screen">
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        class="absolute inset-0 w-full h-full" 
        style="background-image: linear-gradient(var(--soft-pink) 1px, transparent 1px), linear-gradient(90deg, var(--soft-pink) 1px, transparent 1px); background-size: 20px 20px; mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);"
      ></div>

      <div class="absolute inset-0">
        <div class="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-soft-pink/50 blur-[130px] rounded-full"></div>
        <div class="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent-pink/40 blur-[110px] rounded-full"></div>
        <div class="absolute top-[40%] -left-[5%] w-[35%] h-[35%] bg-soft-pink/40 blur-[100px] rounded-full"></div>
        <div class="absolute bottom-[15%] left-[0%] w-[35%] h-[35%] bg-accent-pink/35 blur-[110px] rounded-full"></div>
        <div class="absolute -bottom-[5%] right-[10%] w-[30%] h-[30%] bg-soft-pink/30 blur-[90px] rounded-full"></div>
      </div>
    </div>

    <Navbar />
    <main class="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <AchievementSection />
      <ExperienceSection />
      <GallerySection />
      <PortfolioSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
.app-container {
  overflow-x: hidden;
}

main {
  width: 100%;
}
</style>
