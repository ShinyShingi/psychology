<template>
  <div class="home">
    <!-- Hero Section -->
    <div id="hero">
      <HeroSection 
        telegram-username="anna_psychologist"
        whatsapp-number="79001234567"
      />
    </div>

    <!-- About Section (now includes education/credentials) -->
    <div id="about">
      <AboutSection @show-credentials="showCertificates" />
    </div>

    <!-- Services Section (what I offer) -->
    <div id="services">
      <ServicesSection />
    </div>

    <!-- Methods Section (how I work) -->
    <div id="methods">
      <MethodsSection />
    </div>

    <!-- FAQ Section (common questions) -->
    <div id="faq">
      <FAQSection />
    </div>

    <!-- Contact Section -->
    <div id="contact">
      <ContactSection 
        telegram-username="anna_psychologist"
        whatsapp-number="79001234567"
      />
    </div>

    <!-- Certificate Gallery Modal -->
    <CertificateGallery 
      :is-visible="certificateGalleryVisible"
      @close="closeCertificates"
    />

    <!-- Back to Top Button -->
    <Transition name="fade">
      <button
        v-if="showBackToTop"
        class="back-to-top"
        @click="scrollToTop"
        aria-label="Вернуться к началу страницы"
        title="Вернуться наверх"
      >
        <span aria-hidden="true">↑</span>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScroll } from '@vueuse/core'

// Import all components
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import MethodsSection from '@/components/MethodsSection.vue'
import FAQSection from '@/components/FAQSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import CertificateGallery from '@/components/CertificateGallery.vue'

// Certificate gallery state
const certificateGalleryVisible = ref(false)

const showCertificates = () => {
  certificateGalleryVisible.value = true
}

const closeCertificates = () => {
  certificateGalleryVisible.value = false
}

// Back to top functionality
const { y } = useScroll(window)
const showBackToTop = ref(false)

const updateBackToTop = () => {
  showBackToTop.value = y.value > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Smooth scrolling setup
const enableSmoothScrolling = () => {
  document.documentElement.style.scrollBehavior = 'smooth'
}

onMounted(() => {
  enableSmoothScrolling()
  
  // Watch scroll position for back to top button
  const unwatch = y.value && (() => {
    updateBackToTop()
  })
  
  // Initial check
  updateBackToTop()
  
  return unwatch
})

onUnmounted(() => {
  document.documentElement.style.scrollBehavior = 'auto'
})

// Update back to top button visibility on scroll
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', updateBackToTop)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateBackToTop)
  })
}

// SEO Meta tags (if using vue-meta or similar)
// useMeta({
//   title: 'Анна Петрова - Психолог | Профессиональная психологическая помощь',
//   description: 'Индивидуальные и семейные консультации, онлайн и очные встречи. Помогаю находить внутренние ресурсы и создавать гармонию в жизни.',
//   keywords: 'психолог, психотерапия, консультации, КПТ, гештальт, семейная терапия'
// })
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
}

.back-to-top {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid rgba(229, 229, 229, 0.5);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #666666;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
}

.back-to-top:hover {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: rgba(200, 200, 200, 0.7);
  color: #333333;
}

.back-to-top:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

.back-to-top:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

/* Fade transition for back to top button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
:global(html) {
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 200, 200, 0.5) transparent;
}

:global(::-webkit-scrollbar) {
  width: 8px;
}

:global(::-webkit-scrollbar-track) {
  background: transparent;
}

:global(::-webkit-scrollbar-thumb) {
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

:global(::-webkit-scrollbar-thumb:hover) {
  background-color: rgba(150, 150, 150, 0.7);
}

/* Section spacing and flow */
.home > * + * {
  position: relative;
}

/* Add subtle section separators */
.home > *:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 200, 200, 0.3), transparent);
  pointer-events: none;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .back-to-top {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 45px;
    height: 45px;
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    transition: none;
  }
  
  .back-to-top:hover {
    transform: none;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }
  
  :global(html) {
    scroll-behavior: auto;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .back-to-top {
    border: 2px solid #666666;
    color: #000000;
    background: #ffffff;
  }
  
  .back-to-top:hover {
    background: #f0f0f0;
    border-color: #333333;
  }
}

/* Print styles */
@media print {
  .back-to-top {
    display: none;
  }
}

/* Focus trap prevention during modal */
.home:has(.certificate-gallery:not([aria-hidden="true"])) .back-to-top {
  pointer-events: none;
  opacity: 0.3;
}

/* Loading states and skeleton screens could be added here */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Performance optimizations */
.home {
  contain: layout style paint;
}

/* Intersection observer targets for animations */
.home > * {
  scroll-margin-top: var(--spacing-xl);
}
</style>