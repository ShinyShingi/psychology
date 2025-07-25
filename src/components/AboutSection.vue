<template>
  <section class="about" aria-labelledby="about-title">
    <div class="about-container">
      <div class="about-content">
        <div class="about-text">
          <h2 id="about-title" class="about-title">
            Обо мне
          </h2>
          
          <div class="about-paragraphs">
            <p class="about-paragraph">
              {{ образованиеТекст }}
            </p>
            
            <p class="about-paragraph">
              {{ опытТекст }}
            </p>
            
            <p class="about-paragraph">
              {{ философияТекст }}
            </p>
            
            <p class="about-paragraph">
              {{ принципыТекст }}
            </p>
          </div>
          
          <div class="competencies">
            <h3 class="competencies-title">Ключевые компетенции</h3>
            <p class="competencies-text">
              {{ компетенции }}
            </p>
          </div>

          <div class="education-credentials">
            <h3 class="credentials-title">Образование и квалификация</h3>
            <div class="credentials-summary">
              <div class="credential-item">
                <span class="credential-icon">🎓</span>
                <span class="credential-text">Высшее психологическое образование</span>
              </div>
              <div class="credential-item">
                <span class="credential-icon">📜</span>
                <span class="credential-text">Сертификаты по КПТ, гештальт-терапии</span>
              </div>
              <div class="credential-item">
                <span class="credential-icon">📚</span>
                <span class="credential-text">Регулярное повышение квалификации</span>
              </div>
            </div>
            <button 
              class="credentials-btn"
              @click="$emit('showCredentials')"
              aria-label="Посмотреть документы об образовании"
            >
              <span class="btn-icon" aria-hidden="true">📋</span>
              <span class="btn-text">Посмотреть документы</span>
            </button>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="photo-placeholder" :class="{ 'photo-placeholder--visible': showPhoto }">
            <div class="photo-frame">
              <div class="photo-content">
                <span class="photo-icon" aria-hidden="true">👤</span>
                <span class="photo-label">Фото</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface AboutProps {
  showPhoto?: boolean
  образованиеТекст?: string
  опытТекст?: string
  философияТекст?: string
  принципыТекст?: string
  компетенции?: string
}

defineEmits<{
  showCredentials: []
}>()

withDefaults(defineProps<AboutProps>(), {
  showPhoto: true,
  образованиеТекст: 'Имею высшее психологическое образование и регулярно повышаю квалификацию в области современных методов психотерапии. Специализируюсь на гуманистическом и когнитивно-поведенческом подходах, что позволяет гибко адаптировать работу под потребности каждого человека.',
  опытТекст: 'За годы практики я сопровождала множество людей на их пути к внутренней гармонии и личностному росту. Работаю как с индивидуальными запросами, так и с парами, помогая создавать более здоровые и осознанные отношения.',
  философияТекст: 'Верю в то, что каждый человек обладает внутренними ресурсами для позитивных изменений. Моя задача — создать безопасное пространство, где вы сможете исследовать свои переживания, находить новые способы взаимодействия с миром и развивать навыки эмоциональной регуляции.',
  принципыТекст: 'В работе придерживаюсь принципов конфиденциальности, уважения и безоценочности. Каждая встреча — это возможность для роста и развития, где важны ваши темп, потребности и готовность к изменениям.',
  компетенции: 'Работа с тревогой, отношениями, самооценкой, жизненными переходами'
})
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #fefefe 0%, #f9f9f9 50%, #f5f5f5 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 80%, rgba(245, 245, 245, 0.4) 0%, transparent 50%);
  pointer-events: none;
}

.about-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.about-content {
  display: grid;
  gap: var(--spacing-3xl);
  align-items: start;
}

.about-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-light);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-2xl) 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
}

.about-paragraphs {
  margin-bottom: var(--spacing-2xl);
}

.about-paragraph {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: #555555;
  margin: 0 0 var(--spacing-xl) 0;
  text-align: justify;
  text-justify: inter-word;
}

.about-paragraph:last-child {
  margin-bottom: 0;
}

.competencies {
  background-color: rgba(248, 249, 250, 0.7);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(10px);
}

.competencies-title {
  font-size: 1.375rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-md) 0;
  letter-spacing: 0.01em;
}

.competencies-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666666;
  margin: 0;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.3px;
}

.education-credentials {
  background-color: rgba(245, 245, 245, 0.7);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.3);
  backdrop-filter: blur(10px);
  margin-top: var(--spacing-xl);
}

.credentials-title {
  font-size: 1.375rem;
  font-weight: var(--font-weight-medium);
  color: #2c2c2c;
  margin: 0 0 var(--spacing-lg) 0;
  text-align: center;
  letter-spacing: 0.01em;
}

.credentials-summary {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.credential-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) 0;
}

.credential-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  width: 32px;
  text-align: center;
}

.credential-text {
  font-size: 1rem;
  color: #555555;
  line-height: 1.5;
}

.credentials-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(255, 255, 255, 0.8);
  color: #555555;
  border: 1px solid rgba(229, 229, 229, 0.5);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
}

.credentials-btn:hover {
  background-color: rgba(240, 240, 240, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-color: rgba(200, 200, 200, 0.7);
}

.credentials-btn:focus-visible {
  outline: 2px solid #888888;
  outline-offset: 2px;
}

.btn-icon {
  font-size: 1.125rem;
  display: flex;
  align-items: center;
}

.btn-text {
  letter-spacing: 0.3px;
}

.about-visual {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.photo-placeholder {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.photo-placeholder--visible {
  opacity: 1;
  transform: translateY(0);
}

.photo-frame {
  width: 280px;
  height: 320px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(229, 229, 229, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.photo-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  pointer-events: none;
}

.photo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: #999999;
  position: relative;
  z-index: 1;
}

.photo-icon {
  font-size: 3rem;
  opacity: 0.6;
}

.photo-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Разделители секций */
.about::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 200, 200, 0.5), transparent);
}

/* Адаптивность */
@media (min-width: 1024px) {
  .about-content {
    grid-template-columns: 2fr 1fr;
    gap: var(--spacing-3xl);
  }
  
  .about-title {
    text-align: left;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .about-visual {
    order: -1;
  }
  
  .photo-frame {
    width: 240px;
    height: 280px;
  }
}

@media (max-width: 767px) {
  .about {
    padding: var(--spacing-2xl) 0;
  }
  
  .about-container {
    padding: 0 var(--spacing-md);
  }
  
  .about-content {
    gap: var(--spacing-xl);
  }
  
  .about-paragraph {
    text-align: left;
  }
  
  .competencies {
    padding: var(--spacing-lg);
  }
  
  .photo-frame {
    width: 200px;
    height: 240px;
  }
  
  .about-visual {
    order: -1;
  }
}

@media (max-width: 480px) {
  .about-paragraphs {
    margin-bottom: var(--spacing-lg);
  }
  
  .photo-frame {
    width: 180px;
    height: 220px;
  }
}

/* Анимации появления */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.about-title {
  animation: fadeInLeft 0.8s ease-out;
}

.about-paragraph:nth-child(1) {
  animation: fadeInLeft 0.8s ease-out 0.2s both;
}

.about-paragraph:nth-child(2) {
  animation: fadeInLeft 0.8s ease-out 0.4s both;
}

.about-paragraph:nth-child(3) {
  animation: fadeInLeft 0.8s ease-out 0.6s both;
}

.about-paragraph:nth-child(4) {
  animation: fadeInLeft 0.8s ease-out 0.8s both;
}

.competencies {
  animation: fadeInLeft 0.8s ease-out 1s both;
}

/* Улучшенная типографика */
.about-paragraph::first-letter {
  font-size: 1.1em;
  font-weight: var(--font-weight-medium);
}

/* Высокий контраст для доступности */
@media (prefers-contrast: high) {
  .about-title {
    color: #000000;
  }
  
  .about-paragraph {
    color: #2c2c2c;
  }
  
  .competencies-title {
    color: #000000;
  }
  
  .competencies-text {
    color: #333333;
  }
  
  .photo-frame {
    border: 2px solid #666666;
  }
}

/* Уменьшенная анимация для пользователей с чувствительностью к движению */
@media (prefers-reduced-motion: reduce) {
  .about-title,
  .about-paragraph,
  .competencies,
  .photo-placeholder {
    animation: none;
    transition: none;
  }
  
  .photo-placeholder--visible {
    opacity: 1;
    transform: none;
  }
}

/* Фокус для доступности */
.competencies:focus-within {
  outline: 2px solid #888888;
  outline-offset: 2px;
}
</style>