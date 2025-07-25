<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-container">
      <div class="hero-content">
        <h1 id="hero-title" class="hero-name">
          {{ имя }}
        </h1>
        
        <h2 class="hero-subtitle">
          {{ подзаголовок }}
        </h2>
        
        <p class="hero-description">
          {{ описание }}
        </p>
        
        <div class="hero-work-mode">
          {{ режимРаботы }}
        </div>
        
        <div class="hero-contacts">
          <a
            :href="telegramLink"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-btn contact-btn--telegram"
            aria-label="Связаться через Telegram"
          >
            <svg class="contact-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span class="contact-text">Telegram</span>
          </a>
          
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-btn contact-btn--whatsapp"
            aria-label="Связаться через WhatsApp"
          >
            <svg class="contact-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
            <span class="contact-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface HeroProps {
  имя?: string
  подзаголовок?: string
  описание?: string
  режимРаботы?: string
  telegramUsername?: string
  whatsappNumber?: string
}

const props = withDefaults(defineProps<HeroProps>(), {
  имя: 'Анна Петрова',
  подзаголовок: 'Психологическая поддержка и сопровождение',
  описание: 'Помогаю людям находить внутренние ресурсы и создавать гармонию в жизни',
  режимРаботы: 'Онлайн консультации • Индивидуальная работа',
  telegramUsername: 'username',
  whatsappNumber: '79000000000'
})

const telegramLink = `https://t.me/${props.telegramUsername}`
const whatsappLink = `https://wa.me/${props.whatsappNumber}`
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-tertiary) 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, var(--color-warm-light) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-light);
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: var(--font-weight-normal);
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.01em;
  line-height: 1.3;
}

.hero-description {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  color: var(--text-light);
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-work-mode {
  font-size: 1.125rem;
  color: var(--text-warm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.5px;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--color-warm);
  border-radius: 50px;
  display: inline-block;
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-accent);
}

.hero-contacts {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-lg);
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background-color: var(--color-warm-light);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-accent);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  min-width: 160px;
  justify-content: center;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:hover {
  background-color: var(--color-warm);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--text-light);
}

.contact-btn:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

.contact-btn:focus-visible {
  outline: 2px solid #888888;
  outline-offset: 2px;
}

.contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.contact-text {
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.3px;
}

.contact-btn--telegram:hover {
  background-color: var(--color-warm);
  color: var(--text-primary);
}

.contact-btn--whatsapp:hover {
  background-color: var(--color-warm);
  color: var(--text-primary);
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
    padding: var(--spacing-2xl) 0;
  }
  
  .hero-container {
    padding: 0 var(--spacing-md);
  }
  
  .hero-content {
    gap: var(--spacing-lg);
  }
  
  .hero-work-mode {
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
  
  .hero-contacts {
    gap: var(--spacing-md);
  }
  
  .contact-btn {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: 1rem;
    min-width: 140px;
  }
}

@media (max-width: 480px) {
  .hero-contacts {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn {
    width: 100%;
    max-width: 280px;
  }
}

/* Анимации появления */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-name {
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-description {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-work-mode {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-contacts {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

/* Улучшенная типографика */
@supports (font-variation-settings: normal) {
  .hero-name,
  .hero-subtitle {
    font-variation-settings: 'wght' 300, 'slnt' 0;
  }
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .hero-name {
    color: #000000;
  }
  
  .hero-subtitle {
    color: #1a1a1a;
  }
  
  .hero-description {
    color: #333333;
  }
  
  .contact-btn {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .hero-name,
  .hero-subtitle,
  .hero-description,
  .hero-work-mode,
  .hero-contacts {
    animation: none;
  }
  
  .contact-btn {
    transition: none;
  }
  
  .contact-btn:hover {
    transform: none;
  }
}
</style>