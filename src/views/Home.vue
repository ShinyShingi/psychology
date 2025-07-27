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

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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


// Smooth scrolling setup
const enableSmoothScrolling = () => {
  document.documentElement.style.scrollBehavior = 'smooth'
}

onMounted(() => {
  enableSmoothScrolling()
})

onUnmounted(() => {
  document.documentElement.style.scrollBehavior = 'auto'
})


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


/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }
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