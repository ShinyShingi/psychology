// Main types for psychologist application
export interface Contact {
  phone: string
  email: string
  address: string
}

export interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
}

export interface Page {
  title: string
  description: string
  keywords: string
}