<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AchievementSection from './components/AchievementSection.vue'
import SkillSection from './components/SkillSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <AchievementSection />
      <ExperienceSection />
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
