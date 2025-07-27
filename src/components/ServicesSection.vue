<template>
  <section class="services" aria-labelledby="services-title">
    <div class="services-container">
      <div class="services-content">
        <h2 id="services-title" class="services-title">
          Консультации
        </h2>
        
        <div class="services-grid">
          <div class="formats-section">
            <h3 class="section-subtitle">Форматы работы</h3>
            <div class="formats-list">
              <article 
                v-for="(format, index) in formats" 
                :key="format.id"
                class="format-card"
                :style="{ animationDelay: `${index * 0.15}s` }"
              >
                <div class="format-header">
                  <h4 class="format-name">{{ format.title }}</h4>
                  <div class="format-divider"></div>
                </div>
                <p class="format-description">{{ format.description }}</p>
                <div class="format-duration" v-if="format.duration">
                  <span class="duration-label">Длительность:</span>
                  <span class="duration-value">{{ format.duration }}</span>
                </div>
              </article>
            </div>
          </div>
          
          <div class="pricing-methods-section">
            <div class="pricing-block">
              <h3 class="section-subtitle">Стоимость</h3>
              <div class="pricing-card">
                <div class="pricing-content">
                  <span class="pricing-text">{{ pricing }}</span>
                  <p class="pricing-note">
                    Окончательная стоимость обсуждается индивидуально и зависит от формата и специфики запроса
                  </p>
                </div>
              </div>
            </div>
            
            <div class="methods-block">
              <h3 class="section-subtitle">Способы проведения</h3>
              <div class="methods-list">
                <div 
                  v-for="(method, index) in methods" 
                  :key="method.type"
                  class="method-item"
                  :style="{ animationDelay: `${index * 0.1 + 0.6}s` }"
                >
                  <div class="method-icon" aria-hidden="true">{{ method.icon }}</div>
                  <div class="method-details">
                    <h4 class="method-type">{{ method.type }}</h4>
                    <p class="method-platforms" v-if="method.platforms">{{ method.platforms }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="consultation-note">
          <p class="note-text">
            Первичная консультация поможет определить наиболее подходящий формат работы и выбрать методы, которые лучше всего подойдут для решения ваших задач
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Format {
  id: string
  title: string
  description: string
  duration?: string
}

interface Method {
  type: string
  icon: string
  platforms?: string
}

interface ServicesProps {
  formats?: Format[]
  pricing?: string
  methods?: Method[]
}

withDefaults(defineProps<ServicesProps>(), {
  formats: () => [
    {
      id: '1',
      title: 'Индивидуальные сессии',
      description: 'Персональная работа для глубокого исследования личных вопросов, развития самопонимания и работы с индивидуальными запросами',
      duration: '50 минут'
    },
    {
      id: '2',
      title: 'Парные консультации',
      description: 'Работа с парами для улучшения взаимопонимания, решения конфликтов и укрепления отношений'
    },
    {
      id: '3',
      title: 'Разовые консультации',
      description: 'Краткосрочная поддержка для решения конкретных вопросов или получения профессионального взгляда на ситуацию'
    }
  ],
  pricing: 'Стоимость по запросу',
  methods: () => [
    {
      type: 'Онлайн',
      icon: '💻',
      platforms: 'Zoom, Skype'
    },
    {
      type: 'Очно',
      icon: '🏢',
      platforms: 'В офисе'
    }
  ]
})
</script>

<style scoped>
.services {
  background: linear-gradient(135deg, #ffffff 0%, #fefefe 50%, #f8f9fa 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(245, 245, 245, 0.4) 0%, transparent 60%);
  pointer-events: none;
}

.services-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.services-content {
  max-width: 1100px;
  margin: 0 auto;
}

.services-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-3xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
}

.services-grid {
  display: grid;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  letter-spacing: 0.01em;
}

.formats-list {
  display: grid;
  gap: var(--spacing-lg);
}

.format-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.format-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border-color: rgba(200, 200, 200, 0.6);
}

.format-header {
  margin-bottom: var(--spacing-md);
}

.format-name {
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-sm) 0;
  letter-spacing: 0.01em;
}

.format-divider {
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, #d0d0d0, transparent);
}

.format-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666666;
  margin: 0 0 var(--spacing-md) 0;
}

.format-duration {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
  padding-top: var(--spacing-sm);
  border-top: 1px solid rgba(229, 229, 229, 0.5);
}

.duration-label {
  font-size: 0.9rem;
  color: #888888;
  font-weight: var(--font-weight-medium);
}

.duration-value {
  font-size: 0.9rem;
  color: #555555;
  font-weight: var(--font-weight-medium);
}

.pricing-methods-section {
  display: grid;
  gap: var(--spacing-2xl);
}

.pricing-block,
.methods-block {
  text-align: center;
}

.pricing-card {
  background-color: rgba(248, 249, 250, 0.8);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.4);
  backdrop-filter: blur(10px);
}

.pricing-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
}

.pricing-text {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  letter-spacing: 0.02em;
}

.pricing-note {
  font-size: 1rem;
  line-height: 1.5;
  color: #666666;
  margin: 0;
  max-width: 400px;
}

.methods-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  align-items: center;
}

.method-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(5px);
  min-width: 200px;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInLeft 0.5s ease-out forwards;
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.method-details {
  text-align: left;
}

.method-type {
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-xs) 0;
}

.method-platforms {
  font-size: 0.9rem;
  color: #666666;
  margin: 0;
}

.consultation-note {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: rgba(248, 249, 250, 0.6);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(10px);
}

.note-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555555;
  margin: 0;
  font-style: italic;
}

/* Разделители секций */
.services::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 200, 200, 0.5), transparent);
}

/* Адаптивность */
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
  
  .pricing-methods-section {
    gap: var(--spacing-3xl);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .formats-list {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  
  .methods-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .services {
    padding: var(--spacing-2xl) 0;
  }
  
  .services-container {
    padding: 0 var(--spacing-md);
  }
  
  .services-grid {
    gap: var(--spacing-2xl);
  }
  
  .format-card {
    padding: var(--spacing-lg);
  }
  
  .pricing-card {
    padding: var(--spacing-lg);
  }
  
  .method-item {
    padding: var(--spacing-md);
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
  
  .consultation-note {
    padding: var(--spacing-lg);
  }
}

/* Анимации */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.services-title {
  animation: fadeInUp 0.8s ease-out;
}

.section-subtitle {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .services-title,
  .section-subtitle,
  .format-name,
  .method-type,
  .pricing-text {
    color: #000000;
  }
  
  .format-description,
  .pricing-note,
  .note-text {
    color: #2c2c2c;
  }
  
  .method-platforms {
    color: #333333;
  }
  
  .format-card,
  .pricing-card,
  .method-item,
  .consultation-note {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .services-title,
  .section-subtitle,
  .format-card,
  .method-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .format-card:hover {
    transform: none;
  }
}

/* Фокус для доступности */
.format-card:focus-within,
.method-item:focus-within {
  outline: 2px solid #888888;
  outline-offset: 2px;
}
</style>