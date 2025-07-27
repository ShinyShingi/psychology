<template>
  <div id="app" class="app">
    <header class="header" role="banner">
      <nav class="nav container" role="navigation" aria-label="Основная навигация">
        <router-link 
          to="/" 
          class="logo"
          aria-label="На главную страницу"
        >
          <h1 class="logo-text">Психолог</h1>
        </router-link>

        <!-- Десктопная навигация -->
        <ul class="nav-list desktop-nav" role="menubar">
          <!-- <li role="none">
            <a 
              href="#hero" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Главная
            </a>
          </li> -->
          <li role="none">
            <a 
              href="#about" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Обо мне
            </a>
          </li>
          <li role="none">
            <a 
              href="#services" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Услуги
            </a>
          </li>
          <li role="none">
            <a 
              href="#methods" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Методы
            </a>
          </li>
          <li role="none">
            <a 
              href="#faq" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Вопросы
            </a>
          </li>
          <li role="none">
            <a 
              href="#contact" 
              class="nav-link"
              role="menuitem"
              @click="closeMobileMenu"
            >
              Контакты
            </a>
          </li>
        </ul>

        <!-- Мобильная кнопка меню -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Переключить меню"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <!-- Мобильная навигация -->
        <div 
          id="mobile-nav"
          class="mobile-nav"
          :class="{ 'mobile-nav--open': mobileMenuOpen }"
          role="menu"
          :aria-hidden="!mobileMenuOpen"
        >
          <ul class="mobile-nav-list" role="none">
            <li role="none">
              <a 
                href="#hero" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Главная
              </a>
            </li>
            <li role="none">
              <a 
                href="#about" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Обо мне
              </a>
            </li>
            <li role="none">
              <a 
                href="#services" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Услуги
              </a>
            </li>
            <li role="none">
              <a 
                href="#methods" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Методы
              </a>
            </li>
            <li role="none">
              <a 
                href="#faq" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Вопросы
              </a>
            </li>
            <li role="none">
              <a 
                href="#contact" 
                class="mobile-nav-link"
                role="menuitem"
                @click="closeMobileMenu"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="main" role="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Контакты</h3>
            <p>{{ contacts.phone }}</p>
            <p>{{ contacts.email }}</p>
          </div>
          <div class="footer-section">
            <p>&copy; {{ currentYear }} Психолог. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>

    <BackToTopButton />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMainStore } from '@/stores/main'
import BackToTopButton from '@/components/BackToTopButton.vue'

const store = useMainStore()

const mobileMenuOpen = computed(() => store.mobileMenu)
const contacts = computed(() => store.contacts)
const currentYear = new Date().getFullYear()

const toggleMobileMenu = store.toggleMobileMenu
const closeMobileMenu = store.closeMobileMenu
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: var(--color-primary);
  border-bottom: 1px solid var(--color-accent);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  padding-bottom: var(--spacing-md);
}

.logo {
  text-decoration: none;
}

.logo-text {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0;
}

.desktop-nav {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover,
.nav-link:focus {
  background-color: var(--color-warm);
  color: var(--text-primary);
}

.nav-link--active {
  background-color: var(--color-warm);
  color: var(--text-primary);
}

.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  gap: 0.25rem;
}

.hamburger-line {
  width: 1.5rem;
  height: 2px;
  background-color: var(--text-primary);
  transition: all var(--transition-fast);
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-primary);
  border-bottom: 1px solid var(--color-accent);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal);
}

.mobile-nav--open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: var(--spacing-md);
}

.mobile-nav-link {
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--spacing-md);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-md);
  transition: background-color var(--transition-fast);
}

.mobile-nav-link:hover,
.mobile-nav-link:focus {
  background-color: var(--color-warm);
}

.main {
  flex: 1;
}

.footer {
  background-color: var(--color-warm-light);
  border-top: 1px solid var(--color-accent);
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl) 0;
}

.footer-section h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.footer-section p {
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
}

/* Адаптивность */
@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-menu-btn {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
}

@media (max-width: 767px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
}
</style>