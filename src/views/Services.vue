<template>
  <div class="services">
    <section class="services-hero">
      <div class="container">
        <h1 class="page-title">Мои услуги</h1>
        <p class="page-description">
          Профессиональная психологическая помощь в различных форматах
        </p>
      </div>
    </section>

    <section class="services-list" aria-labelledby="services-title">
      <div class="container">
        <div class="services-grid">
          <article 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
          >
            <h2 class="service-title">{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-details">
              <div class="service-info">
                <span class="service-price">{{ service.price }}</span>
                <span class="service-duration">{{ service.duration }}</span>
              </div>
              <router-link to="/contacts" class="btn service-btn">
                Записаться
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()
const services = computed(() => store.services)
</script>

<style scoped>
.services-hero {
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
  max-width: 600px;
  margin: 0 auto;
}

.services-list {
  padding: var(--spacing-3xl) 0;
}

.services-grid {
  display: grid;
  gap: var(--spacing-xl);
}

.service-card {
  background-color: var(--color-primary);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  transition: all var(--transition-fast);
}

.service-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.service-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.service-description {
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.service-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.service-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.service-price {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.service-duration {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.service-btn {
  flex-shrink: 0;
}

/* Адаптивность */
@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

@media (max-width: 767px) {
  .service-details {
    flex-direction: column;
    gap: var(--spacing-lg);
    align-items: stretch;
  }
  
  .service-info {
    text-align: center;
  }
}
</style>