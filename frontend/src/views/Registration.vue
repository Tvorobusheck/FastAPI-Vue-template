<template>
  <div class="common-container">
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Registration</h1>
      <div>
        <input
          id="email"
          v-model="regData.email"
          placeholder="email@example.com"
          class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          id="password"
          :type="passwordVisible ? 'text' : 'password'"
          v-model="regData.password"
          placeholder="password"
          class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label class="flex items-center mb-4">
          <input type="checkbox" v-model="passwordVisible" class="mr-2" />
          Show Password
        </label>
        <button
          id="submitRegistration"
          @click="loadRegistration"
          class="common-button w-full"
        >
          Submit
        </button>
        <div v-if="successMessage" id="successMessage" class="mt-4 text-green-500">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as api from '@/api';
import { apiConfiguration } from '@/utils/server';
import '@/styles.css'
import { withLoading } from '@/components/Loading.vue';

export default {
  name: 'Registration',
  data() {
    return {
      regData: new api.UserCreate(),
      passwordVisible: false, // Password visibility is disabled by default
      successMessage: '' // Success message is initially empty
    }
  },
  methods: {
    async submitRegistration() {
      try {
        // Simulate API call to register the user
        const apiInstance = new api.AuthApi(apiConfiguration())
        const user = await apiInstance.registerRegisterUsersAuthRegisterPost(this.regData) as api.UserRead        
        this.successMessage = 'Registration successful!'
      } catch (error) {
        console.error('Registration failed:', error)
      }
    },
    loadRegistration() {
      withLoading(() => this.submitRegistration())
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>