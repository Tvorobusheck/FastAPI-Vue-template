<template>
  <div class="common-container">
    <ResponseMessage :responseCode="responseCode" @update:responseCode="responseCode = $event" />
    <div class="common-card">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
      <div>
        <input
          id="username"
          v-model="username"
          placeholder="email@example.com"
          class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          id="password"
          :type="passwordVisible ? 'text' : 'password'"
          v-model="password"
          placeholder="password"
          class="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label class="flex items-center mb-4">
          <input type="checkbox" v-model="passwordVisible" class="mr-2" />
          Show Password
        </label>
        <button
          id="submit-login"
          @click="this.loadLogin()"
          class="common-button w-full"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as api from '@/api';
import { ApiException } from '@/api';
import { apiConfiguration } from '@/utils/server';
import '@/styles.css'
import { withLoading } from '@/components/Loading.vue'
import ResponseMessage from '@/components/ResponseMessage.vue'
import { setJwtToken } from '@/utils/auth';

export default {
  name: 'Login',
  components: {
    ResponseMessage
  },
  data() {
    return {
      username: '',
      password: '',
      passwordVisible: false, // Password visibility is disabled by default
      responseCode: null // Response code for error messages
    }
  },
  methods: {
    async submitLogin() {
      try {
        // Simulate API call to register the user
        const apiInstance = new api.AuthApi(apiConfiguration())    
        const responseValid = await apiInstance.authJwtLoginUsersJwtLoginPost(this.username, this.password) as api.BearerResponse
        setJwtToken(responseValid.accessToken)
        this.responseCode = 200
      } catch (error) {
        if (error instanceof ApiException) {
          console.log(error.code)
          this.responseCode = error.code
        } else {
          console.error('Login failed:', error)
          this.responseCode = 500 // Generic server error
        }
      }
    },
    async loadLogin() {
      await withLoading(() => this.submitLogin())
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>