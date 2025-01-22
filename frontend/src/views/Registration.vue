<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Welcome!</h1>
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
          @click="submitRegistration"
          class="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
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
import { apiConfiguration } from '@/utils/config';

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
        const apiInstance = new api.AuthApi(apiConfiguration)
        const user = await apiInstance.registerRegisterUsersAuthRegisterPost(this.regData) as api.UserRead        
        this.successMessage = 'Registration successful!'
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>