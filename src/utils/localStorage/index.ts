const APP_KEY = 'TWEETER'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return data ? JSON.parse(data) : {}
}

export function setStorageItem<T = unknown>(key: string, value: T) {
  if (typeof window === 'undefined') return
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

export function removeStorageItem(key: string) {
  if (typeof window === 'undefined') return
  return window.localStorage.removeItem(`${APP_KEY}_${key}`)
}
