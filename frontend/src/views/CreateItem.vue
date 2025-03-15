<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Create Item</h1>
      <input
        id="item-name"
        type="text"
        v-model="itemName"
        placeholder="Item name"
        class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        id="item-description"
        v-model="itemDescription"
        placeholder="Item description"
        class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        id="submit-create-item"
        @click="createItem"
        class="common-button w-full"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as api from '@/api'
import { apiConfiguration } from '@/utils/server'
import { withLoading } from '@/components/Loading.vue'
import { useRouter } from 'vue-router'
import '@/styles.css'

export default defineComponent({
  name: 'CreateItem',
  setup() {
    const itemName = ref('')
    const itemDescription = ref('')
    const router = useRouter()

    const createItem = async () => {
      const apiInstance = new api.ItemsApi(apiConfiguration())
      await withLoading(async () => {
        await apiInstance.endpointItemsPost({
          name: itemName.value,
          description: itemDescription.value
        })
        router.push({ name: 'Items' })
      })
    }

    return {
      itemName,
      itemDescription,
      createItem
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>