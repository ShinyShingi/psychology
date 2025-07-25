<template>
  <Teleport to="body">
    <div 
      v-if="isVisible"
      class="modal-overlay"
      @click="closeModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      @keydown.esc="closeModal"
    >
      <div 
        class="modal-content"
        @click.stop
        ref="modalContentRef"
        tabindex="-1"
      >
        <div class="modal-header">
          <h2 id="modal-title" class="modal-title">
            Образование и сертификаты
          </h2>
          <button 
            class="close-btn"
            @click="closeModal"
            aria-label="Закрыть модальное окно"
            ref="closeBtnRef"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        
        <div class="certificates-grid">
          <article
            v-for="(certificate, index) in certificates"
            :key="certificate.id"
            class="certificate-card"
            @click="openLightbox(index)"
            @keydown.enter="openLightbox(index)"
            @keydown.space.prevent="openLightbox(index)"
            tabindex="0"
            role="button"
            :aria-label="`Открыть сертификат: ${certificate.title}`"
          >
            <div class="certificate-thumbnail">
              <img 
                :src="`https://picsum.photos/200/260?random=${certificate.id}`"
                :alt="certificate.title"
                class="certificate-image"
                loading="lazy"
              />
            </div>
            <h3 class="certificate-title">{{ certificate.title }}</h3>
          </article>
        </div>
      </div>
      
      <!-- Lightbox -->
      <div 
        v-if="lightboxActive"
        class="lightbox-overlay"
        @click="closeLightbox"
        @keydown.esc="closeLightbox"
        @keydown.arrow-left="previousCertificate"
        @keydown.arrow-right="nextCertificate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
      >
        <div class="lightbox-content" @click.stop>
          <div class="lightbox-header">
            <h3 id="lightbox-title" class="lightbox-title">
              {{ currentCertificate?.title }}
            </h3>
            <div class="lightbox-counter">
              {{ currentIndex + 1 }} из {{ certificates.length }}
            </div>
            <button 
              class="lightbox-close"
              @click="closeLightbox"
              aria-label="Закрыть просмотр"
              ref="lightboxCloseBtnRef"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          
          <div class="lightbox-body">
            <button 
              v-if="certificates.length > 1"
              class="nav-btn nav-btn--prev"
              @click="previousCertificate"
              aria-label="Предыдущий сертификат"
              :disabled="currentIndex === 0"
            >
              <span aria-hidden="true">‹</span>
            </button>
            
            <div class="certificate-preview">
              <div class="certificate-lightbox-image">
                <img 
                  :src="`https://picsum.photos/600/800?random=${currentCertificate?.id}`"
                  :alt="currentCertificate?.title"
                  class="lightbox-img"
                />
              </div>
            </div>
            
            <button 
              v-if="certificates.length > 1"
              class="nav-btn nav-btn--next"
              @click="nextCertificate"
              aria-label="Следующий сертификат"
              :disabled="currentIndex === certificates.length - 1"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { onKeyStroke } from '@vueuse/core'

interface Certificate {
  id: string
  title: string
  description: string
}

interface CertificateGalleryProps {
  isVisible: boolean
  certificates?: Certificate[]
}

const props = withDefaults(defineProps<CertificateGalleryProps>(), {
  certificates: () => [
    {
      id: '1',
      title: 'Диплом о высшем образовании',
      description: 'Московский государственный университет им. М.В. Ломоносова'
    },
    {
      id: '2',
      title: 'Диплом магистра психологии',
      description: 'Магистратура по психологическому консультированию'
    },
    {
      id: '3',
      title: 'Сертификат КПТ',
      description: 'Когнитивно-поведенческая терапия, 120 часов'
    },
    {
      id: '4',
      title: 'Сертификат гештальт-терапии',
      description: 'Базовый курс гештальт-подхода'
    },
    {
      id: '5',
      title: 'Системная терапия',
      description: 'Специализация по семейному консультированию'
    },
    {
      id: '6',
      title: 'Супервизия',
      description: 'Сертификат о прохождении супервизии'
    },
    {
      id: '7',
      title: 'Повышение квалификации',
      description: 'Дополнительное профессиональное образование'
    },
    {
      id: '8',
      title: 'Участие в конференции',
      description: 'Сертификат участника научной конференции'
    },
    {
      id: '9',
      title: 'Сертификат психодрамы',
      description: 'Базовый курс психодрамы и социометрии'
    },
    {
      id: '10',
      title: 'Арт-терапия',
      description: 'Методы изобразительной терапии в консультировании'
    },
    {
      id: '11',
      title: 'Работа с парами',
      description: 'Специализация по парному консультированию'
    },
    {
      id: '12',
      title: 'Детская психология',
      description: 'Работа с детьми и подростками'
    }
  ]
})

const emit = defineEmits<{
  close: []
}>()

const lightboxActive = ref(false)
const currentIndex = ref(0)
const modalContentRef = ref<HTMLElement>()
const closeBtnRef = ref<HTMLElement>()
const lightboxCloseBtnRef = ref<HTMLElement>()

const currentCertificate = computed(() => 
  props.certificates[currentIndex.value]
)

// Simple focus management without useFocusTrap
const focusFirstElement = (container: HTMLElement | null) => {
  if (!container) return
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0] as HTMLElement
  if (firstElement) {
    firstElement.focus()
  }
}

const closeModal = () => {
  if (lightboxActive.value) {
    closeLightbox()
    return
  }
  emit('close')
}

const openLightbox = (index: number) => {
  currentIndex.value = index
  lightboxActive.value = true
  nextTick(() => {
    focusFirstElement(lightboxCloseBtnRef.value)
  })
}

const closeLightbox = () => {
  lightboxActive.value = false
  nextTick(() => {
    focusFirstElement(modalContentRef.value)
  })
}

const nextCertificate = () => {
  if (currentIndex.value < props.certificates.length - 1) {
    currentIndex.value++
  }
}

const previousCertificate = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Handle modal visibility changes
watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      closeBtnRef.value?.focus()
    })
  } else {
    lightboxActive.value = false
  }
})

// Keyboard navigation
onKeyStroke('Escape', () => {
  if (lightboxActive.value) {
    closeLightbox()
  } else if (props.isVisible) {
    closeModal()
  }
})

onKeyStroke('ArrowLeft', (e) => {
  if (lightboxActive.value) {
    e.preventDefault()
    previousCertificate()
  }
})

onKeyStroke('ArrowRight', (e) => {
  if (lightboxActive.value) {
    e.preventDefault()
    nextCertificate()
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-lg);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background-color: var(--color-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 900px;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl);
  border-bottom: 1px solid var(--color-accent);
  background-color: var(--color-warm-light);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0;
}

.close-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: var(--color-accent);
  color: var(--text-primary);
}

.close-btn:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  max-height: 60vh;
  overflow-y: auto;
}

.certificate-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-lg);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-md);
  background-color: var(--color-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.certificate-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--text-light);
}

.certificate-card:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

.certificate-thumbnail {
  width: 120px;
  height: 160px;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  border: 1px solid var(--color-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.certificate-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.certificate-card:hover .certificate-image {
  transform: scale(1.05);
}

.certificate-title {
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0;
  line-height: 1.4;
}

/* Lightbox styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  animation: fadeIn 0.2s ease-out;
}

.lightbox-content {
  background-color: var(--color-primary);
  border-radius: var(--border-radius-lg);
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  position: relative;
  animation: slideIn 0.2s ease-out;
}

.lightbox-header {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: 1px solid var(--color-accent);
}

.lightbox-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0;
}

.lightbox-counter {
  font-size: 0.9rem;
  color: var(--text-secondary);
  background-color: var(--color-warm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
}

.lightbox-body {
  display: flex;
  align-items: center;
  padding: var(--spacing-xl);
  gap: var(--spacing-lg);
  min-height: 400px;
}

.certificate-preview {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.certificate-lightbox-image {
  max-width: 100%;
  max-height: 400px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-accent);
}

.lightbox-img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: contain;
  background-color: var(--color-primary);
}

.nav-btn {
  width: 50px;
  height: 50px;
  border: 1px solid var(--color-accent);
  background-color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background-color: var(--color-warm);
  border-color: var(--text-light);
  color: var(--text-primary);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-btn:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

.lightbox-close {
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-accent);
  background-color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.lightbox-close:hover {
  background-color: var(--color-warm);
  border-color: var(--text-light);
  color: var(--text-primary);
}

.lightbox-close:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .modal-overlay {
    padding: var(--spacing-md);
  }
  
  .certificates-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: var(--spacing-lg);
  }
  
  .certificate-thumbnail {
    width: 100px;
    height: 130px;
  }
  
  .certificate-icon {
    font-size: 1.5rem;
  }
  
  .lightbox-body {
    flex-direction: column;
    padding: var(--spacing-lg);
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  
  .certificate-lightbox-image {
    max-height: 320px;
  }
  
  .lightbox-img {
    max-height: 320px;
  }
  
}

@media (max-width: 480px) {
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    padding: var(--spacing-lg);
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
  
  .lightbox-header {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .certificate-lightbox-image {
    max-height: 260px;
  }
  
  .lightbox-img {
    max-height: 260px;
  }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .modal-overlay,
  .modal-content,
  .lightbox-overlay,
  .lightbox-content {
    animation: none;
  }
  
  .certificate-card:hover {
    transform: none;
  }
}

/* Высокий контраст */
@media (prefers-contrast: high) {
  .modal-title,
  .lightbox-title,
  .certificate-title {
    color: #000000;
  }
  
  .close-btn,
  .lightbox-close,
  .nav-btn {
    border: 2px solid #666666;
  }
  
  .certificate-card {
    border: 2px solid #333333;
  }
}
</style>