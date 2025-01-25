<template>
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { isLoading } from '@/utils/loading'

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