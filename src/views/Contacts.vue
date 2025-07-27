<template>
  <div class="contacts">
    <section class="contacts-hero">
      <div class="container">
        <h1 class="page-title">Контакты</h1>
        <p class="page-description">
          Свяжитесь со мной для записи на консультацию
        </p>
      </div>
    </section>

    <section class="contacts-content">
      <div class="container">
        <div class="contacts-grid">
          <div class="contact-info">
            <h2>Контактная информация</h2>
            
            <div class="contact-item">
              <h3>Телефон</h3>
              <p>
                <a :href="`tel:${контакты.телефон.replace(/\s/g, '')}`" class="contact-link">
                  {{ контакты.телефон }}
                </a>
              </p>
            </div>

            <div class="contact-item">
              <h3>Email</h3>
              <p>
                <a :href="`mailto:${контакты.email}`" class="contact-link">
                  {{ контакты.email }}
                </a>
              </p>
            </div>

            <div class="contact-item">
              <h3>Адрес</h3>
              <p>{{ контакты.адрес }}</p>
            </div>

            <div class="contact-item">
              <h3>Режим работы</h3>
              <ul class="schedule-list">
                <li>Понедельник - Пятница: 9:00 - 20:00</li>
                <li>Суббота: 10:00 - 16:00</li>
                <li>Воскресенье: выходной</li>
              </ul>
            </div>
          </div>

          <div class="contact-form-section">
            <h2>Записаться на консультацию</h2>
            <form class="contact-form" @submit.prevent="отправитьФорму">
              <div class="form-group">
                <label for="name" class="form-label">Имя *</label>
                <input
                  id="name"
                  v-model="форма.имя"
                  type="text"
                  class="form-input"
                  required
                  :aria-describedby="ошибки.имя ? 'name-error' : undefined"
                >
                <div v-if="ошибки.имя" id="name-error" class="form-error" role="alert">
                  {{ ошибки.имя }}
                </div>
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">Телефон *</label>
                <input
                  id="phone"
                  v-model="форма.телефон"
                  type="tel"
                  class="form-input"
                  required
                  :aria-describedby="ошибки.телефон ? 'phone-error' : undefined"
                >
                <div v-if="ошибки.телефон" id="phone-error" class="form-error" role="alert">
                  {{ ошибки.телефон }}
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="форма.email"
                  type="email"
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="service" class="form-label">Услуга</label>
                <select id="service" v-model="форма.услуга" class="form-select">
                  <option value="">Выберите услугу</option>
                  <option v-for="услуга in услуги" :key="услуга.id" :value="услуга.название">
                    {{ услуга.название }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Сообщение</label>
                <textarea
                  id="message"
                  v-model="форма.сообщение"
                  class="form-textarea"
                  rows="4"
                  placeholder="Опишите вашу ситуацию или вопросы, которые вас беспокоят"
                ></textarea>
              </div>

              <button type="submit" class="btn form-submit" :disabled="отправляется">
                {{ отправляется ? 'Отправляется...' : 'Отправить заявку' }}
              </button>
            </form>

            <div v-if="статусОтправки" class="form-status" :class="статусОтправки.тип" role="alert">
              {{ статусОтправки.сообщение }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()
const контакты = computed(() => store.контакты)
const услуги = computed(() => store.услуги)

const форма = reactive({
  имя: '',
  телефон: '',
  email: '',
  услуга: '',
  сообщение: ''
})

const ошибки = reactive({
  имя: '',
  телефон: ''
})

const отправляется = ref(false)
const статусОтправки = ref<{ тип: 'success' | 'error'; сообщение: string } | null>(null)

const валидироватьФорму = () => {
  ошибки.имя = ''
  ошибки.телефон = ''

  if (!форма.имя.trim()) {
    ошибки.имя = 'Пожалуйста, введите ваше имя'
    return false
  }

  if (!форма.телефон.trim()) {
    ошибки.телефон = 'Пожалуйста, введите ваш телефон'
    return false
  }

  const телефонРегекс = /^[\+]?[0-9\s\-\(\)]+$/
  if (!телефонРегекс.test(форма.телефон)) {
    ошибки.телефон = 'Пожалуйста, введите корректный номер телефона'
    return false
  }

  return true
}

const отправитьФорму = async () => {
  if (!валидироватьФорму()) {
    return
  }

  отправляется.value = true
  статусОтправки.value = null

  try {
    // Здесь должна быть логика отправки формы на сервер
    // Для демонстрации используем имитацию
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    статусОтправки.value = {
      тип: 'success',
      сообщение: 'Ваша заявка успешно отправлена! Я свяжусь с вами в ближайшее время.'
    }

    // Очищаем форму после успешной отправки
    Object.keys(форма).forEach(key => {
      форма[key as keyof typeof форма] = ''
    })
  } catch (error) {
    статусОтправки.value = {
      тип: 'error',
      сообщение: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь со мной напрямую.'
    }
  } finally {
    отправляется.value = false
  }
}
</script>

<style scoped>
.contacts-hero {
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

.contacts-content {
  padding: var(--spacing-3xl) 0;
}

.contacts-grid {
  display: grid;
  gap: var(--spacing-2xl);
}

.contact-info h2,
.contact-form-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xl);
  color: var(--text-primary);
}

.contact-item {
  margin-bottom: var(--spacing-xl);
}

.contact-item h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.contact-item p {
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
}

.contact-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.contact-link:hover,
.contact-link:focus {
  color: var(--text-secondary);
}

.schedule-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.schedule-list li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

.contact-form {
  background-color: var(--color-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  background-color: var(--color-primary);
  color: var(--text-primary);
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--text-primary);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-error {
  color: #dc3545;
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
}

.form-submit {
  width: 100%;
  font-size: var(--font-size-lg);
  padding: var(--spacing-md) var(--spacing-xl);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-status {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
}

.form-status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Адаптивность */
@media (min-width: 1024px) {
  .contacts-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 767px) {
  .contacts-content {
    padding: var(--spacing-2xl) 0;
  }
  
  .contact-form {
    padding: var(--spacing-lg);
  }
}
</style>