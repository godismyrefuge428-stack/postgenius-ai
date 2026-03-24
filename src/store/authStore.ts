import { create } from 'zustand'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'customer'
  subscription?: {
    tier: 'starter' | 'growth' | 'agency'
    status: 'active' | 'cancelled'
    renewalDate: string
  }
}

interface AuthStore {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  token: localStorage.getItem('token'),

  login: async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        set({ isAuthenticated: true, user: data.user, token: data.token })
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  },

  signup: async (email: string, password: string, name: string) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      })
      const data = await response.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        set({ isAuthenticated: true, user: data.user, token: data.token })
      }
    } catch (error) {
      console.error('Signup failed:', error)
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ isAuthenticated: false, user: null, token: null })
  },

  setUser: (user: User) => {
    set({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }
}))
