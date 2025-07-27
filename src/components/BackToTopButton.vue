<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      class="back-to-top-btn"
      @click="scrollToTop"
      aria-label="Наверх"
      title="Наверх"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300

const checkScrollPosition = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
.back-to-top-btn {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--color-taupe-light), var(--color-taupe));
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(172, 164, 159, 0.4);
  transition: all var(--transition-fast);
  z-index: 50;
}

.back-to-top-btn:hover {
  background: linear-gradient(135deg, var(--color-taupe), var(--color-taupe-dark));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(172, 164, 159, 0.5);
}

.back-to-top-btn:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.back-to-top-btn:active {
  transform: translateY(0);
}

.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all var(--transition-normal);
}

.back-to-top-enter-from {
  opacity: 0;
  transform: translateY(100%) scale(0.8);
}

.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.8);
}

@media (max-width: 767px) {
  .back-to-top-btn {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .back-to-top-btn {
    transition: none;
  }
  
  .back-to-top-enter-active,
  .back-to-top-leave-active {
    transition: none;
  }
}
</style>