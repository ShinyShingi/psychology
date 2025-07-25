<template>
  <section class="contact" aria-labelledby="contact-title">
    <div class="contact-container">
      <div class="contact-content">
        <h2 id="contact-title" class="contact-title">
          Записаться на консультацию
        </h2>
        
        <div class="contact-methods">
          <a
            :href="telegramLink"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method contact-method--telegram"
            aria-label="Связаться через Telegram"
          >
            <div class="method-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div class="method-content">
              <h3 class="method-title">Telegram</h3>
              <p class="method-description">Быстрый и удобный способ связи</p>
            </div>
            <div class="method-arrow" aria-hidden="true">→</div>
          </a>
          
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method contact-method--whatsapp"
            aria-label="Связаться через WhatsApp"
          >
            <div class="method-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </div>
            <div class="method-content">
              <h3 class="method-title">WhatsApp</h3>
              <p class="method-description">Голосовые и текстовые сообщения</p>
            </div>
            <div class="method-arrow" aria-hidden="true">→</div>
          </a>
        </div>
        
        <div class="contact-info">
          <div class="info-grid">
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">⏱️</div>
              <div class="info-content">
                <h4 class="info-title">Время ответа</h4>
                <p class="info-text">{{ времяОтвета }}</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">🎁</div>
              <div class="info-content">
                <h4 class="info-title">Первичная консультация</h4>
                <p class="info-text">{{ первичнаяКонсультация }}</p>
              </div>
            </div>
            
            <div class="info-item info-item--schedule">
              <div class="info-icon" aria-hidden="true">📅</div>
              <div class="info-content">
                <h4 class="info-title">График работы</h4>
                <div class="schedule-details">
                  <p class="schedule-line">{{ расписание.будни }}</p>
                  <p class="schedule-line">{{ расписание.суббота }}</p>
                  <p class="schedule-line schedule-line--weekend">{{ расписание.воскресенье }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-note">
          <p class="note-text">
            <span class="note-icon" aria-hidden="true">💫</span>
            Готова помочь вам найти внутренние ресурсы и создать гармонию в жизни
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactProps {
  telegramUsername?: string
  whatsappNumber?: string
  времяОтвета?: string
  первичнаяКонсультация?: string
  расписание?: {
    будни: string
    суббота: string
    воскресенье: string
  }
}

const props = withDefaults(defineProps<ContactProps>(), {
  telegramUsername: 'anna_psychologist',
  whatsappNumber: '79001234567',
  времяОтвета: 'Отвечаю в течение 2-4 часов',
  первичнаяКонсультация: '20 минут бесплатно',
  расписание: () => ({
    будни: 'Пн-Пт: 10:00-20:00',
    суббота: 'Сб: 10:00-16:00',
    воскресенье: 'Вс: выходной'
  })
})

const telegramLink = `https://t.me/${props.telegramUsername}`
const whatsappLink = `https://wa.me/${props.whatsappNumber}`
</script>

<style scoped>
.contact {
  background: linear-gradient(135deg, var(--color-tertiary) 0%, var(--color-primary) 50%, var(--color-warm-light) 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, var(--color-warm-light) 0%, transparent 70%);
  pointer-events: none;
}

.contact-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-3xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-3xl);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background-color: var(--color-primary);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.contact-method::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.contact-method:hover::before {
  left: 100%;
}

.contact-method:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  border-color: var(--text-light);
}

.contact-method--telegram:hover {
  background-color: var(--color-warm-light);
}

.contact-method--whatsapp:hover {
  background-color: var(--color-warm-light);
}

.contact-method:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

.method-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-warm);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.method-icon svg {
  width: 1.75rem;
  height: 1.75rem;
}

.contact-method:hover .method-icon {
  transform: scale(1.1);
}

.method-content {
  flex: 1;
  text-align: left;
}

.method-title {
  font-size: 1.375rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.method-description {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.method-arrow {
  flex-shrink: 0;
  font-size: 1.25rem;
  color: var(--text-light);
  transition: transform 0.3s ease;
}

.contact-method:hover .method-arrow {
  transform: translateX(5px);
}

.contact-info {
  margin-bottom: var(--spacing-3xl);
}

.info-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-warm-light);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-accent);
  backdrop-filter: blur(5px);
  text-align: left;
}

.info-item--schedule {
  grid-column: 1 / -1;
}

.info-icon {
  flex-shrink: 0;
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-radius: 50%;
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.info-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.schedule-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.schedule-line {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.schedule-line--weekend {
  color: var(--text-light);
  font-style: italic;
}

.contact-note {
  background: linear-gradient(135deg, var(--color-warm-light) 0%, var(--color-primary) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-accent);
  backdrop-filter: blur(10px);
}

.note-text {
  font-size: 1.125rem;
  font-style: italic;
  color: var(--text-secondary);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  line-height: 1.6;
}

.note-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

/* Адаптивность */
@media (min-width: 768px) {
  .contact-methods {
    flex-direction: row;
    gap: var(--spacing-xl);
  }
  
  .contact-method {
    flex: 1;
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-item--schedule {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 400px;
  }
}

@media (max-width: 767px) {
  .contact {
    padding: var(--spacing-2xl) 0;
  }
  
  .contact-container {
    padding: 0 var(--spacing-md);
  }
  
  .contact-method {
    padding: var(--spacing-lg);
  }
  
  .method-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .method-title {
    font-size: 1.25rem;
  }
  
  .method-description {
    font-size: 0.9rem;
  }
  
  .info-item {
    padding: var(--spacing-md);
  }
  
  .contact-note {
    padding: var(--spacing-lg);
  }
  
  .note-text {
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .method-content {
    text-align: center;
  }
  
  .method-arrow {
    display: none;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .info-content {
    text-align: center;
  }
}

/* Анимации */
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

.contact-title {
  animation: fadeInUp 0.8s ease-out;
}

.contact-method:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.contact-method:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.contact-info {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.contact-note {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .contact-title {
    color: #000000;
  }
  
  .method-title,
  .info-title {
    color: #000000;
  }
  
  .method-description,
  .info-text,
  .note-text {
    color: #2c2c2c;
  }
  
  .contact-method,
  .info-item,
  .contact-note {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .contact-title,
  .contact-method,
  .contact-info,
  .contact-note {
    animation: none;
  }
  
  .contact-method {
    transition: none;
  }
  
  .contact-method:hover {
    transform: none;
  }
  
  .contact-method:hover .method-icon,
  .contact-method:hover .method-arrow {
    transform: none;
  }
  
  .contact-method::before {
    display: none;
  }
}

/* Улучшения для сенсорных устройств */
@media (hover: hover) {
  .contact-method:hover {
    transform: translateY(-3px);
  }
}

@media (hover: none) {
  .contact-method:active {
    transform: scale(0.98);
    transition-duration: 0.1s;
  }
}
</style>