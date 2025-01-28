<template>
  <div class="common-container">
    <Loading ref="loading"/>
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Logout</h1>
      <div v-if="isLogout" id="logout-success">
        <p>You have been logged out successfully.</p>
      </div>
      <div v-else>
        <p>Logging out...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as api from '@/api'
import { apiConfiguration } from '@/utils/server'
import { clearJwtToken, isLogedIn } from '@/utils/auth'
import '@/styles.css'
import { withLoading } from '@/components/Loading.vue'

export default defineComponent({
  name: 'Logout',
  setup() {
    const isLogout = ref(false)

    const logout = async () => {
      try {
        if (isLogedIn()) {
          const apiInstance = new api.AuthApi(apiConfiguration())
          try {
            await apiInstance.authJwtLogoutUsersJwtLogoutPost()
          } catch (error) {
            console.error('Failed to logout:', error)
          } finally {
            clearJwtToken()
          }
        }
        isLogout.value = !isLogedIn()
      } catch (error) {
        console.error('Failed to fetch profile data:', error)
      }
    }

    onMounted(() => {
      withLoading(() => logout())
    })

    return {
      isLogout,
      logout
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>