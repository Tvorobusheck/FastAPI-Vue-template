<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Search Items</h1>
      <input
        id="items-search"
        type="text"
        v-model="searchQuery"
        @input="searchItems"
        placeholder="Search items..."
        class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        id="create-item"
        @click="goToCreatePage"
        class="common-button w-full mb-4"
      >
        Create Item
      </button>
      <div id="items-list">
        <ul>
          <li v-for="item in items" :key="item.id">
            <RouterLink :to="{ name: 'ViewItem', params: { id: item.id } }">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import * as api from '@/api'
import { apiConfiguration } from '@/utils/server'
import { withLoading } from '@/components/Loading.vue'
import '@/styles.css'

export default defineComponent({
  name: 'SearchItems',
  setup() {
    /**
     * The search query entered by the user.
     * @type {import('vue').Ref<string>}
     */
    const searchQuery = ref('')

    /**
     * The list of items fetched from the API.
     * @type {import('vue').Ref<api.ItemSchema[]>}
     */
    const items = ref<api.ItemSchema[]>([])

    /**
     * Vue Router instance for navigation.
     * @type {import('vue-router').Router}
     */
    const router = useRouter()

    /**
     * Fetches items from the API based on the search query.
     * @async
     * @param {string} query - The search query to filter items.
     */
    const fetchItems = async (query: string) => {
      const apiInstance = new api.ItemsApi(apiConfiguration())
      const response = await apiInstance.searchSearchItemsGet(query)
      items.value = response.items
    }

    /**
     * Triggers the search functionality with a loading indicator.
     * @async
     */
    const searchItems = async () => {
      await withLoading(() => fetchItems(searchQuery.value))
    }

    /**
     * Navigates to the "Create Item" page.
     */
    const goToCreatePage = () => {
      router.push({ name: 'CreateItem' })
    }

    return {
      searchQuery,
      items,
      searchItems,
      goToCreatePage
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>