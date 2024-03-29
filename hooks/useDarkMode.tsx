import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      console.warn(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(error)
    }
  }
  return [storedValue, setValue]
}

export default function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage('dark-theme')

  // @ts-ignore
  const isEnabled = typeof enabledState === 'undefined' && enabled

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const className = 'dark'
      const bodyClass = window.document.body.classList

      isEnabled ? bodyClass.add(className) : bodyClass.remove(className)
    }
  }, [enabled, isEnabled])

  return [enabled, setEnabled]
}
