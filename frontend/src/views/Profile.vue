<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Profile</h1>
      <div id="profile-info">
        <div v-if="userData">
          <p><strong>Email:</strong><div id="email">{{ userData.email }}</div></p>
          <!-- Add more fields as needed -->
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as api from '@/api'
import { apiConfiguration } from '@/utils/server'
import '@/styles.css'

export default defineComponent({
  name: 'Profile',
  methods: {
    
  },
  setup() {
    const userData = ref<api.UserRead | null>(null)

    const initProfile = async () => {
      try {
        const apiInstance = new api.UsersApi(apiConfiguration())
        const response = await apiInstance.usersCurrentUserUsersAuthMeGet()
        userData.value = response
      } catch (error) {
        console.error('Failed to fetch profile data:', error)
      }
    }

    onMounted(() => {
      initProfile()
    })

    return {
      userData,
    }
  },
})
</script>

<style scoped>
/* Add any additional styles here */
</style>