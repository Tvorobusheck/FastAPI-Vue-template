  
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

<template>
  <div class="hello">
    <h1>Welcome!</h1>
    <div>
      <input id="email" v-model="regData.email" placeholder="email@example.com" />
      <input 
        id="password" 
        :type="passwordVisible ? 'text' : 'password'" 
        v-model="regData.password" 
        placeholder="password" 
      />
      <label>
        <input type="checkbox" v-model="passwordVisible" />
        Show Password
      </label>
      <button id="submitRegistration" @click="submitRegistration">Submit</button>
      <div v-if="successMessage" id="successMessage">{{ successMessage }}</div>
    </div>
  </div>
</template>

  
<style>
/* Add your styles here */
</style>