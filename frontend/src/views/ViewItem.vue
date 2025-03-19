<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">View Item</h1>
      <div v-if="item">
        <p data-testid="item-name"><strong>Name:</strong> {{ item.name }}</p>
        <p data-testid="item-description"><strong>Description:</strong> {{ item.description }}</p>
        <div>
          <label for="name">Edit Name:</label>
          <input id="name" v-model="editName" />
        </div>
        <div>
          <label for="description">Edit Description:</label>
          <input id="description" v-model="editDescription" />
        </div>
        <button @click="updateItem" class="common-button mt-4">Save</button>
        <button @click="confirmDeleteItem" class="common-button mt-4">Delete</button>
        <h2 class="text-xl font-bold mt-6">Subitems</h2>
        <ul>
          <li v-for="subitem in subitems" :key="subitem.id">
            <input
              v-model="subitem.editName"
              placeholder="Edit Subitem Name"
              class="common-input"
            />
            <button @click="updateSubitem(subitem)" class="common-button mt-2">Save</button>
          </li>
        </ul>
        <div class="mt-4">
          <h3 class="text-lg font-bold">Add Subitem</h3>
          <input v-model="newSubitemName" placeholder="Subitem Name" class="common-input" />
          <button @click="addSubitem" class="common-button mt-2">Add</button>
        </div>
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
    const editName = ref('')
    const editDescription = ref('')
    const subitems = ref<api.SubitemSchema[]>([])
    const newSubitemName = ref('')
    const router = useRouter()

    const fetchItem = async (id: number) => {
      const apiInstance = new api.ItemsApi(apiConfiguration())
      const response = await apiInstance.endpointItemsIdGet(id)
      item.value = response
      editName.value = response.name
      editDescription.value = response.description
    }

    const fetchSubitems = async (itemId: number) => {
      const apiInstance = new api.SubitemsApi(apiConfiguration())
      const response = await apiInstance.endpointSubitemsGet(undefined, undefined, undefined, undefined, undefined, itemId)
      subitems.value = response.data.map((subitem) => ({
        ...subitem,
        editName: subitem.name, // Add editName property for each subitem
      }))
    }

    const updateItem = async () => {
      if (item.value) {
        const apiInstance = new api.ItemsApi(apiConfiguration())
        await apiInstance.endpointItemsIdPatch(item.value.id, {
          name: editName.value,
          description: editDescription.value,
        })
        await fetchItem(item.value.id)
      }
    }

    const deleteItem = async () => {
      if (item.value) {
        const apiInstance = new api.ItemsApi(apiConfiguration())
        await apiInstance.endpointItemsIdDelete(item.value.id)
        goBack()
      }
    }

    const confirmDeleteItem = () => {
      if (confirm('Are you sure you want to delete this item?')) {
        deleteItem()
      }
    }

    const addSubitem = async () => {
      if (newSubitemName.value.trim() && item.value) {
        const apiInstance = new api.SubitemsApi(apiConfiguration())
        await apiInstance.endpointSubitemsPost({
          name: newSubitemName.value,
          itemId: item.value.id,
        })
        newSubitemName.value = ''
        await fetchSubitems(item.value.id)
      }
    }

    const updateSubitem = async (subitem: api.SubitemSchema) => {
      if (subitem.editName.trim()) {
        const apiInstance = new api.SubitemsApi(apiConfiguration())
        await apiInstance.endpointSubitemsIdPatch(subitem.id, {
          name: subitem.editName,
          itemId: subitem.itemId,
        })
        await fetchSubitems(subitem.itemId)
      }
    }

    const goBack = () => {
      router.go(-1)
    }

    onMounted(async () => {
      await fetchItem(props.id)
      await fetchSubitems(props.id)
    })

    return {
      item,
      editName,
      editDescription,
      subitems,
      newSubitemName,
      updateItem,
      confirmDeleteItem,
      addSubitem,
      updateSubitem,
      goBack
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>