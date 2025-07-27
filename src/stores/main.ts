import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Contact, Service } from '@/types'

export const useMainStore = defineStore('main', () => {
  const contacts = ref<Contact>({
    phone: '+7 (900) 000-00-00',
    email: 'info@психолог.com',
    address: 'г. Москва, ул. Примерная, д. 1'
  })

  const services = ref<Service[]>([
    {
      id: '1',
      title: 'Индивидуальная консультация',
      description: 'Персональная работа с психологом для решения личных вопросов',
      price: '3000 ₽',
      duration: '50 минут'
    },
    {
      id: '2',
      title: 'Семейная терапия',
      description: 'Работа с парами и семьями для улучшения отношений',
      price: '4000 ₽',
      duration: '60 минут'
    },
    {
      id: '3',
      title: 'Онлайн консультация',
      description: 'Психологическая помощь в удобном онлайн формате',
      price: '2500 ₽',
      duration: '50 минут'
    }
  ])

  const mobileMenu = ref(false)

  const toggleMobileMenu = () => {
    mobileMenu.value = !mobileMenu.value
  }

  const closeMobileMenu = () => {
    mobileMenu.value = false
  }

  return {
    contacts,
    services,
    mobileMenu: computed(() => mobileMenu.value),
    toggleMobileMenu,
    closeMobileMenu
  }
})