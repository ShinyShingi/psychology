<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">Обо мне</h1>
        <p class="page-description">
          Психолог с многолетним опытом работы
        </p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Мой подход к работе</h2>
            <p>
              Я считаю, что каждый человек уникален и заслуживает индивидуального подхода. 
              В своей работе я использую современные методы психотерапии, адаптируя их 
              под конкретные потребности и цели каждого клиента.
            </p>
            <p>
              Моя философия основана на убеждении, что у каждого человека есть внутренние 
              ресурсы для преодоления трудностей и достижения психологического благополучия. 
              Моя задача — помочь вам их обнаружить и активировать.
            </p>

            <h3>Образование и квалификация</h3>
            <ul class="qualifications-list">
              <li>Высшее психологическое образование</li>
              <li>Дополнительное образование в области психотерапии</li>
              <li>Регулярное повышение квалификации</li>
              <li>Участие в профессиональных конференциях и семинарах</li>
            </ul>

            <h3>Направления работы</h3>
            <ul class="specializations-list">
              <li>Индивидуальная психотерапия</li>
              <li>Семейное консультирование</li>
              <li>Работа с тревожными состояниями</li>
              <li>Помощь в кризисных ситуациях</li>
              <li>Личностный рост и самопознание</li>
            </ul>
          </div>

          <div class="about-sidebar">
            <div class="contact-card">
              <h3>Связаться со мной</h3>
              <div class="contact-info">
                <p>
                  <strong>Телефон:</strong><br>
                  {{ контакты.телефон }}
                </p>
                <p>
                  <strong>Email:</strong><br>
                  {{ контакты.email }}
                </p>
                <p>
                  <strong>Адрес:</strong><br>
                  {{ контакты.адрес }}
                </p>
              </div>
              <router-link to="/контакты" class="btn">
                Записаться на консультацию
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()
const контакты = computed(() => store.контакты)
</script>

<style scoped>
.about-hero {
  background-color: var(--color-secondary);
  padding: var(--spacing-2xl) 0;
  text-align: center;
}

.page-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
}

.about-content {
  padding: var(--spacing-3xl) 0;
}

.about-grid {
  display: grid;
  gap: var(--spacing-2xl);
}

.about-text {
  line-height: var(--line-height-relaxed);
}

.about-text h2 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.about-text h3 {
  color: var(--text-primary);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.qualifications-list,
.specializations-list {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
}

.qualifications-list li,
.specializations-list li {
  position: relative;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
}

.qualifications-list li::before,
.specializations-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-primary);
  font-weight: var(--font-weight-bold);
}

.about-sidebar {
  align-self: start;
}

.contact-card {
  background-color: var(--color-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
}

.contact-card h3 {
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
}

.contact-info {
  margin-bottom: var(--spacing-xl);
  text-align: left;
}

.contact-info p {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

.contact-info strong {
  color: var(--text-primary);
}

/* Адаптивность */
@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 2fr 1fr;
  }
}

@media (max-width: 767px) {
  .contact-card {
    text-align: center;
  }
  
  .contact-info {
    text-align: center;
  }
}
</style>