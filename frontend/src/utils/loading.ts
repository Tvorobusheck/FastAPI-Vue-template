import { ref } from 'vue'

export const isLoading = ref(false)

export const useLoading = () => {
  return {
    isLoading
  }
}

export const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
  isLoading.value = true
  try {
    const result = await fn()
    return result
  } finally {
    isLoading.value = false
  }
}