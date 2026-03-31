<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ultra-soft">
      <div class="flex flex-col items-center">
        <h2 class="text-primary-pink font-black tracking-[4px] uppercase text-base animate-pulse">Installing Assets</h2>
        <div class="flex gap-2 mt-4">
          <div class="w-2 h-2 bg-primary-pink rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="w-2 h-2 bg-primary-pink rounded-full animate-bounce [animation-delay:-0.15s] opacity-80"></div>
          <div class="w-2 h-2 bg-primary-pink rounded-full animate-bounce opacity-60"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean
});
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
