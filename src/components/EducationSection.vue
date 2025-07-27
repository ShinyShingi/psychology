<template>
  <section class="education" aria-labelledby="education-title">
    <div class="education-container">
      <div class="education-content">
        <h2 id="education-title" class="education-title">
          Образование и квалификация
        </h2>
        
        <div class="education-sections">
          <div class="education-block">
            <h3 class="block-title">Основное образование</h3>
            <div class="education-items">
              <article 
                v-for="(образование, index) in основноеОбразование" 
                :key="образование.id"
                class="education-item"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                <div class="item-year">{{ образование.год }}</div>
                <div class="item-content">
                  <h4 class="item-title">{{ образование.название }}</h4>
                  <p class="item-institution">{{ образование.учреждение }}</p>
                  <p class="item-specialization" v-if="образование.специализация">
                    {{ образование.специализация }}
                  </p>
                </div>
              </article>
            </div>
          </div>
          
          <div class="education-block">
            <h3 class="block-title">Дополнительное обучение</h3>
            <div class="training-grid">
              <article 
                v-for="(обучение, index) in дополнительноеОбучение" 
                :key="обучение.id"
                class="training-item"
                :style="{ animationDelay: `${index * 0.1 + 0.4}s` }"
              >
                <div class="training-header">
                  <h4 class="training-title">{{ обучение.название }}</h4>
                  <span class="training-year">{{ обучение.год }}</span>
                </div>
                <p class="training-description">{{ обучение.описание }}</p>
                <div class="training-divider"></div>
              </article>
            </div>
          </div>
        </div>
        
        <div class="certificates-cta">
          <button 
            class="certificates-btn"
            @click="$emit('showCertificates')"
            aria-label="Посмотреть документы об образовании"
          >
            <span class="btn-icon" aria-hidden="true">📜</span>
            <span class="btn-text">Посмотреть документы</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ОбразованиеItem {
  id: string
  год: string
  название: string
  учреждение: string
  специализация?: string
}

interface ОбучениеItem {
  id: string
  год: string
  название: string
  описание: string
}

interface EducationProps {
  основноеОбразование?: ОбразованиеItem[]
  дополнительноеОбучение?: ОбучениеItem[]
}

defineEmits<{
  showCertificates: []
}>()

withDefaults(defineProps<EducationProps>(), {
  основноеОбразование: () => [
    {
      id: '1',
      год: '2018',
      название: 'Психология',
      учреждение: 'Московский государственный университет им. М.В. Ломоносова',
      специализация: 'Клиническая психология'
    },
    {
      id: '2',
      год: '2020',
      название: 'Магистратура по психологии',
      учреждение: 'МГУ им. М.В. Ломоносова',
      специализация: 'Психологическое консультирование'
    }
  ],
  дополнительноеОбучение: () => [
    {
      id: '1',
      год: '2021',
      название: 'Когнитивно-поведенческая терапия',
      описание: 'Интенсивный курс по КПТ, 120 академических часов'
    },
    {
      id: '2',
      год: '2022',
      название: 'Гештальт-подход в консультировании',
      описание: 'Базовый курс гештальт-терапии, 80 часов теории и практики'
    },
    {
      id: '3',
      год: '2022',
      название: 'Системная семейная терапия',
      описание: 'Специализация по работе с семьями и парами'
    },
    {
      id: '4',
      год: '2023',
      название: 'Супервизия и интервизия',
      описание: 'Регулярные супервизорские встречи для профессионального развития'
    }
  ]
})
</script>

<style scoped>
.education {
  background: linear-gradient(135deg, #fefefe 0%, #f9f9f9 50%, #ffffff 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.education::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 60% 40%, rgba(245, 245, 245, 0.4) 0%, transparent 60%);
  pointer-events: none;
}

.education-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.education-content {
  max-width: 900px;
  margin: 0 auto;
}

.education-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-3xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
}

.education-sections {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.education-block {
  background-color: rgba(255, 255, 255, 0.8);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.4);
  backdrop-filter: blur(10px);
}

.block-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  letter-spacing: 0.01em;
}

.education-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.education-item {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: rgba(248, 249, 250, 0.6);
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(229, 229, 229, 0.3);
  opacity: 0;
  transform: translateX(-30px);
  animation: fadeInLeft 0.6s ease-out forwards;
}

.item-year {
  flex-shrink: 0;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  color: #666666;
  background-color: rgba(200, 200, 200, 0.2);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  text-align: center;
  min-width: 80px;
}

.item-content {
  flex: 1;
}

.item-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
  margin: 0 0 var(--spacing-xs) 0;
}

.item-institution {
  font-size: 1rem;
  color: #555555;
  margin: 0 0 var(--spacing-xs) 0;
  font-weight: var(--font-weight-medium);
}

.item-specialization {
  font-size: 0.9rem;
  color: #666666;
  margin: 0;
  font-style: italic;
}

.training-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.training-item {
  padding: var(--spacing-lg);
  background-color: rgba(248, 249, 250, 0.4);
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(229, 229, 229, 0.2);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
}

.training-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
  gap: var(--spacing-md);
}

.training-title {
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
  margin: 0;
  flex: 1;
}

.training-year {
  font-size: 0.9rem;
  color: #666666;
  font-weight: var(--font-weight-medium);
  background-color: rgba(229, 229, 229, 0.3);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  flex-shrink: 0;
}

.training-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555555;
  margin: 0 0 var(--spacing-md) 0;
}

.training-divider {
  width: 30px;
  height: 1px;
  background: linear-gradient(90deg, #d0d0d0, transparent);
}

.certificates-cta {
  text-align: center;
}

.certificates-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-2xl);
  background-color: rgba(248, 249, 250, 0.8);
  color: #555555;
  border: 1px solid rgba(229, 229, 229, 0.5);
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.certificates-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.certificates-btn:hover::before {
  left: 100%;
}

.certificates-btn:hover {
  background-color: rgba(240, 240, 240, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(200, 200, 200, 0.7);
}

.certificates-btn:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

.certificates-btn:focus-visible {
  outline: 2px solid #888888;
  outline-offset: 2px;
}

.btn-icon {
  font-size: 1.25rem;
  display: flex;
  align-items: center;
}

.btn-text {
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.3px;
}

/* Разделители секций */
.education::after {
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
  .training-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .education {
    padding: var(--spacing-2xl) 0;
  }
  
  .education-container {
    padding: 0 var(--spacing-md);
  }
  
  .education-block {
    padding: var(--spacing-lg);
  }
  
  .education-item {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .item-year {
    align-self: flex-start;
    min-width: auto;
  }
  
  .training-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
  
  .certificates-btn {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: 1rem;
  }
}

/* Анимации */
@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.education-title {
  animation: fadeInUp 0.8s ease-out;
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .education-title,
  .block-title,
  .item-title,
  .training-title {
    color: #000000;
  }
  
  .item-institution,
  .training-description {
    color: var(--text-heading);
  }
  
  .certificates-btn {
    border: 2px solid #666666;
    color: #000000;
  }
  
  .education-block,
  .education-item,
  .training-item {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .education-title,
  .education-item,
  .training-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .certificates-btn {
    transition: none;
  }
  
  .certificates-btn:hover {
    transform: none;
  }
  
  .certificates-btn::before {
    display: none;
  }
}
</style>