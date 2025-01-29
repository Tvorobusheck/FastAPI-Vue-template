<template>
  <div v-if="responseCode || customText" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div id="response-message" class="relative p-4 border rounded-md bg-white shadow-lg max-w-sm w-full">
      <button @click="closeMessage" id="close-response-message" class="absolute top-0 right-0 mt-2 mr-2 text-red-500">
        &times;
      </button>
      <p v-if="customText" class="text-red-500">{{ customText }}</p>
      <p v-else-if="responseCode === 200" class="text-green-500">Success</p>
      <p v-else-if="responseCode === 403" class="text-red-500">Access denied</p>
      <p v-else-if="responseCode === 404" class="text-red-500">Not found</p>
      <p v-else-if="responseCode === 422" class="text-red-500">Invalid data</p>
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
    },
    customText: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props, { emit }) {
    const responseCode = ref<number | null>(props.responseCode)
    const customText = ref<string | null>(props.customText)

    const closeMessage = () => {
      responseCode.value = null
      emit('update:responseCode', null)
      customText.value = null
      emit('update:customText', null)
    }

    watch(() => props.responseCode, (newVal) => {
      responseCode.value = newVal
    })

    watch(() => props.customText, (newVal) => {
      customText.value = newVal
    })

    return {
      responseCode,
      customText,
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