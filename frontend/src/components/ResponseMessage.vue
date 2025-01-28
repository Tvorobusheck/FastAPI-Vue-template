<template>
  <div v-if="responseCode" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div id="response-message" class="relative p-4 border rounded-md bg-white shadow-lg max-w-sm w-full">
      <button @click="closeMessage" id="close-response-message" class="absolute top-0 right-0 mt-2 mr-2 text-red-500">
        &times;
      </button>
      <p v-if="responseCode === 200" class="text-green-500">Success</p>
      <p v-else-if="responseCode === 403" class="text-red-500">Access denied</p>
      <p v-else-if="responseCode === 404" class="text-red-500">Not found</p>
      <p v-else class="text-red-500">Server Error: {{ responseCode }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'ResponseMessage',
  props: {
    responseCode: {
      type: Number,
      required: false,
      default: null
    }
  },
  setup(props, { emit }) {
    const responseCode = ref<number | null>(props.responseCode)
    
    const closeMessage = () => {
      responseCode.value = null
      emit('update:responseCode', null)
    }

    watch(() => props.responseCode, (newVal) => {
      responseCode.value = newVal
    })

    return {
      responseCode,
      closeMessage
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
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>