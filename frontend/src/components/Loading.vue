<template>
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div id="loader" class="loader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const isLoading = ref(false)

/**
 * A utility function to wrap an asynchronous operation with a loading indicator.
 * Displays the loading spinner if the operation takes longer than 500ms.
 *
 * @template T The type of the result returned by the asynchronous operation.
 * @param {() => Promise<T>} fn The asynchronous function to execute.
 * @returns {Promise<T>} The result of the asynchronous operation.
 */
export const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
  let timeoutId: number | undefined
  try {
    timeoutId = window.setTimeout(() => {
      isLoading.value = true
    }, 500)
    const result = await fn()
    return result
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    isLoading.value = false
  }
}

/**
 * A Vue component that displays a loading spinner when the `isLoading` state is true.
 */
export default defineComponent({
  name: 'Loading',
  setup() {
    return {
      isLoading
    }
  }
})
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>