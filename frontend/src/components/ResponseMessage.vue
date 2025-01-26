<template>
  <div v-if="responseCode" id="response-message">
    <p v-if="responseCode === 200" class="text-green-500">Success</p>
    <p v-else-if="responseCode === 403" class="text-red-500">Access denied</p>
    <p v-else-if="responseCode === 404" class="text-red-500">Not found</p>
    <p v-else class="text-red-500">Server Error: {{ responseCode }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ResponseMessage',
  setup() {
    const responseCode = ref<number | null>(null)

    return {
      responseCode
    }
  }
})
</script>

<style scoped>
.text-green-500 {
  color: #48bb78;
}
.text-red-500 {
  color: #f56565;
}
</style>