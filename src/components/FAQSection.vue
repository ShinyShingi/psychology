<template>
  <section class="faq" aria-labelledby="faq-title">
    <div class="faq-container">
      <div class="faq-content">
        <h2 id="faq-title" class="faq-title">
          Часто задаваемые вопросы
        </h2>
        
        <div class="faq-list" role="list">
          <article 
            v-for="(item, index) in faqItems" 
            :key="item.id"
            class="faq-item"
            role="listitem"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <button
              class="faq-question"
              :class="{ 'faq-question--active': activeItem === item.id }"
              @click="toggleItem(item.id)"
              :aria-expanded="activeItem === item.id"
              :aria-controls="`faq-answer-${item.id}`"
              role="button"
              tabindex="0"
              @keydown.enter="toggleItem(item.id)"
              @keydown.space.prevent="toggleItem(item.id)"
            >
              <span class="question-text">{{ item.вопрос }}</span>
              <span 
                class="question-icon"
                :class="{ 'question-icon--active': activeItem === item.id }"
                aria-hidden="true"
              >
                {{ activeItem === item.id ? '−' : '+' }}
              </span>
            </button>
            
            <div 
              :id="`faq-answer-${item.id}`"
              class="faq-answer"
              :class="{ 'faq-answer--active': activeItem === item.id }"
              role="region"
              :aria-labelledby="`faq-question-${item.id}`"
              :aria-hidden="activeItem !== item.id"
            >
              <div class="answer-content">
                <p class="answer-text">{{ item.ответ }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQItem {
  id: string
  вопрос: string
  ответ: string
}

interface FAQProps {
  faqItems?: FAQItem[]
}

withDefaults(defineProps<FAQProps>(), {
  faqItems: () => [
    {
      id: '1',
      вопрос: 'Как проходит первая встреча?',
      ответ: 'Первая встреча — это знакомство и возможность понять, подходим ли мы друг другу. Мы обсудим ваш запрос, я расскажу о своём подходе к работе, а вы сможете задать любые вопросы. Длительность составляет около 50 минут. По итогам встречи вы сможете принять решение о продолжении работы.'
    },
    {
      id: '2',
      вопрос: 'Какой подход лучше подойдёт именно мне?',
      ответ: 'Выбор подхода зависит от ваших целей, особенностей и предпочтений. На первой встрече мы обсудим ваш запрос, и я предложу наиболее подходящие методы работы. Часто использую интегративный подход, сочетая разные методы для достижения лучших результатов.'
    },
    {
      id: '3',
      вопрос: 'Как понять, нужна ли мне помощь психолога?',
      ответ: 'Обратиться к психологу стоит, если вы чувствуете, что не справляетесь с жизненными ситуациями самостоятельно, испытываете длительные негативные эмоции, проблемы в отношениях или хотите лучше понять себя. Желание изменить что-то в своей жизни — уже достаточный повод для обращения.'
    },
    {
      id: '4',
      вопрос: 'Сколько длится терапия и когда будут результаты?',
      ответ: 'Длительность работы индивидуальна и зависит от ваших целей. Некоторые вопросы можно проработать за 3-5 встреч, глубинные изменения требуют больше времени. Первые позитивные сдвиги обычно заметны уже через несколько сессий. Мы регулярно обсуждаем прогресс и корректируем план работы.'
    }
  ]
})

const activeItem = ref<string | null>(null)

const toggleItem = (itemId: string) => {
  activeItem.value = activeItem.value === itemId ? null : itemId
}
</script>

<style scoped>
.faq {
  background: linear-gradient(135deg, var(--color-warm-light) 0%, var(--color-primary) 50%, var(--color-tertiary) 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.faq::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 40% 60%, var(--color-warm-light) 0%, transparent 60%);
  pointer-events: none;
}

.faq-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

.faq-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-3xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.faq-item {
  background-color: var(--color-primary);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.faq-item:hover {
  border-color: var(--text-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.faq-question:hover {
  background-color: var(--color-warm-light);
}

.faq-question:focus {
  outline: 2px solid var(--text-secondary);
  outline-offset: 2px;
  background-color: var(--color-warm-light);
}

.faq-question--active {
  background-color: var(--color-warm-light);
  border-bottom: 1px solid var(--color-accent);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.question-text {
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  line-height: 1.4;
  padding-right: var(--spacing-md);
}

.question-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-secondary);
  background-color: var(--color-accent);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.question-icon--active {
  transform: rotate(180deg);
  background-color: var(--color-warm);
  color: var(--text-primary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer--active {
  max-height: 500px;
}

.answer-content {
  padding: 0 var(--spacing-xl) var(--spacing-lg) var(--spacing-xl);
  border-top: 1px solid var(--color-accent);
  background-color: var(--color-warm-light);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.answer-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: var(--spacing-lg) 0 0 0;
}

/* Разделители секций */
.faq::after {
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
@media (max-width: 767px) {
  .faq {
    padding: var(--spacing-2xl) 0;
  }
  
  .faq-container {
    padding: 0 var(--spacing-md);
  }
  
  .faq-question {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .question-text {
    font-size: 1rem;
  }
  
  .question-icon {
    width: 28px;
    height: 28px;
    font-size: 1.125rem;
  }
  
  .answer-content {
    padding: 0 var(--spacing-lg) var(--spacing-md) var(--spacing-lg);
  }
  
  .answer-text {
    font-size: 0.9rem;
    margin: var(--spacing-md) 0 0 0;
  }
}

@media (max-width: 480px) {
  .faq-question {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }
  
  .question-text {
    padding-right: 0;
  }
  
  .question-icon {
    align-self: flex-end;
  }
}

/* Анимации */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-title {
  animation: fadeInUp 0.8s ease-out;
}

/* Улучшения для сенсорных устройств */
@media (hover: hover) {
  .faq-question:hover .question-icon {
    background-color: rgba(200, 200, 200, 0.5);
    transform: scale(1.05);
  }
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .faq-title {
    color: #000000;
  }
  
  .question-text {
    color: #000000;
  }
  
  .answer-text {
    color: var(--text-heading);
  }
  
  .question-icon {
    color: #000000;
    background-color: rgba(150, 150, 150, 0.5);
  }
  
  .faq-item {
    border: 2px solid #666666;
  }
  
  .faq-question:focus {
    outline: 3px solid #000000;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .faq-title,
  .faq-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .faq-answer {
    transition: none;
  }
  
  .question-icon {
    transition: none;
  }
  
  .question-icon--active {
    transform: none;
  }
  
  .faq-question:hover .question-icon {
    transform: none;
  }
}

/* Клавиатурная навигация */
.faq-question:focus-visible {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

/* Улучшенная доступность для скринридеров */
.faq-answer[aria-hidden="true"] {
  visibility: hidden;
}

.faq-answer[aria-hidden="false"] {
  visibility: visible;
}
</style>