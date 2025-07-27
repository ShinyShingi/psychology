<template>
  <section class="methods" aria-labelledby="methods-title">
    <div class="methods-container">
      <div class="methods-content">
        <h2 id="methods-title" class="methods-title">
          Мой подход к терапии
        </h2>
        
        <div class="methods-description">
          <p class="description-text">
            {{ описаниеПроцесса }}
          </p>
        </div>
        
        <div class="methods-list">
          <h3 class="methods-subtitle">Методы работы</h3>
          <div class="methods-grid">
            <article 
              v-for="(метод, index) in методы" 
              :key="метод.id"
              class="method-card"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="method-header">
                <h4 class="method-name">{{ метод.название }}</h4>
                <div class="method-divider"></div>
              </div>
              <p class="method-description">{{ метод.описание }}</p>
            </article>
          </div>
        </div>
        
        <div class="principles">
          <h3 class="principles-title">Принципы работы</h3>
          <div class="principles-list">
            <div 
              v-for="(принцип, index) in принципы" 
              :key="принцип"
              class="principle-item"
              :style="{ animationDelay: `${index * 0.1 + 1}s` }"
            >
              <span class="principle-bullet" aria-hidden="true">●</span>
              <span class="principle-text">{{ принцип }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Метод {
  id: string
  название: string
  описание: string
}

interface MethodsProps {
  описаниеПроцесса?: string
  методы?: Метод[]
  принципы?: string[]
}

withDefaults(defineProps<MethodsProps>(), {
  описаниеПроцесса: 'Терапевтический процесс — это совместная работа, где мы создаем пространство для исследования ваших переживаний, понимания внутренних процессов и поиска новых способов взаимодействия с собой и миром. Каждая встреча — это возможность для роста и открытий.',
  методы: () => [
    {
      id: '1',
      название: 'Когнитивно-поведенческая терапия',
      описание: 'Работа с мыслями и поведением, изучение связей между мышлением, эмоциями и действиями для создания позитивных изменений в жизни'
    },
    {
      id: '2',
      название: 'Гештальт-подход',
      описание: 'Работа с чувствами и опытом в настоящем моменте, исследование того, как прошлый опыт влияет на текущие переживания'
    },
    {
      id: '3',
      название: 'Системная терапия',
      описание: 'Работа с отношениями и системами, в которых мы находимся, понимание динамики взаимодействий и их влияния на благополучие'
    },
    {
      id: '4',
      название: 'Интегративный подход',
      описание: 'Сочетание различных методов в зависимости от ваших потребностей и особенностей, создание индивидуального пути терапии'
    }
  ],
  принципы: () => [
    'Конфиденциальность',
    'Безопасность', 
    'Уважение'
  ]
})
</script>

<style scoped>
.methods {
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 50%, #f5f5f5 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.methods::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 30%, rgba(248, 249, 250, 0.4) 0%, transparent 60%);
  pointer-events: none;
}

.methods-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.methods-content {
  max-width: 1000px;
  margin: 0 auto;
}

.methods-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-2xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
}

.methods-description {
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.description-text {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: #555555;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

.methods-list {
  margin-bottom: var(--spacing-3xl);
}

.methods-subtitle,
.principles-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  letter-spacing: 0.01em;
}

.methods-grid {
  display: grid;
  gap: var(--spacing-xl);
}

.method-card {
  background-color: rgba(255, 255, 255, 0.8);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.method-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(200, 200, 200, 0.5);
}

.method-header {
  margin-bottom: var(--spacing-md);
}

.method-name {
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-sm) 0;
  letter-spacing: 0.01em;
}

.method-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #d0d0d0, transparent);
}

.method-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666666;
  margin: 0;
}

.principles {
  background-color: rgba(248, 249, 250, 0.6);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(10px);
}

.principles-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  justify-content: center;
}

.principle-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInLeft 0.5s ease-out forwards;
}

.principle-bullet {
  color: #999999;
  font-size: 0.75rem;
  flex-shrink: 0;
}

.principle-text {
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: #555555;
  letter-spacing: 0.3px;
}

/* Разделители секций */
.methods::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 200, 200, 0.5), transparent);
}

/* Адаптивность */
@media (min-width: 768px) {
  .methods-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  
  .principles-list {
    gap: var(--spacing-2xl);
  }
}

@media (max-width: 767px) {
  .methods {
    padding: var(--spacing-2xl) 0;
  }
  
  .methods-container {
    padding: 0 var(--spacing-md);
  }
  
  .methods-list {
    margin-bottom: var(--spacing-2xl);
  }
  
  .method-card {
    padding: var(--spacing-lg);
  }
  
  .principles {
    padding: var(--spacing-lg);
  }
  
  .principles-list {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
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

.methods-title {
  animation: fadeInUp 0.8s ease-out;
}

.description-text {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.methods-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.principles-title {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .methods-title,
  .methods-subtitle,
  .principles-title,
  .method-name {
    color: #000000;
  }
  
  .description-text,
  .method-description {
    color: var(--text-heading);
  }
  
  .principle-text {
    color: #333333;
  }
  
  .method-card,
  .principles {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .methods-title,
  .description-text,
  .methods-subtitle,
  .principles-title,
  .method-card,
  .principle-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .method-card:hover {
    transform: none;
  }
}

/* Фокус для доступности */
.method-card:focus-within {
  outline: 2px solid #888888;
  outline-offset: 2px;
}
</style>