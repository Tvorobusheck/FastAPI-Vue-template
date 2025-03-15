<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">View Item</h1>
      <div v-if="item">
        <p data-testid="item-name"><strong>Name:</strong> {{ item.name }}</p>
        <p data-testid="item-description"><strong>Description:</strong> {{ item.description }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <button @click="goBack" class="common-button mt-4">Back</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as api from '@/api'
import { apiConfiguration } from '@/utils/server'
import '@/styles.css'

export default defineComponent({
  name: 'ViewItem',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const item = ref<api.ItemSchema | null>(null)
    const router = useRouter()

    const fetchItem = async (id: number) => {
      const apiInstance = new api.ItemsApi(apiConfiguration())
      const response = await apiInstance.endpointItemsIdGet(id)
      item.value = response
    }

    const goBack = () => {
      router.go(-1)
    }

    onMounted(async () => {
      await fetchItem(props.id)
    })

    return {
      item,
      goBack
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>