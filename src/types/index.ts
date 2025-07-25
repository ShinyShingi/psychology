// Основные типы для приложения психолога
export interface Контакт {
  телефон: string
  email: string
  адрес: string
}

export interface Услуга {
  id: string
  название: string
  описание: string
  стоимость: string
  длительность: string
}

export interface Страница {
  заголовок: string
  описание: string
  ключевыеСлова: string
}