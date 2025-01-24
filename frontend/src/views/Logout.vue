<template>
    <div class="common-container">
      <div class="common-card">
        <h1 class="text-2xl font-bold mb-6 text-center">Logout</h1>
        <div id="logout-success">
          <div v-if="isLogout.valueOf">
            <p class="text-green-500">Logout successful!</p>
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
import { isLogedIn } from '@/utils/auth';
  
  export default defineComponent({
    name: 'Logout',
    setup() {
      const isLogout = ref(false)
  
      const logout = async () => {
        try {
            if (isLogedIn()) {
                const apiInstance = new api.AuthApi(apiConfiguration())
                try {
                    const response = await apiInstance.authJwtLogoutUsersJwtLogoutPost()
                } catch {}
            }
            isLogout.value = !isLogedIn()
        } catch (error) {
          console.error('Failed to fetch profile data:', error)
        }
      }
  
      onMounted(() => {
        logout()
      })
  
      return {
        isLogout,
      }
    },
  })
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>