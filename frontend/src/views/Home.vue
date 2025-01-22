<template>
  <div class="common-container">
    <div class="common-card">
      <h1 id="welcome" class="text-4xl font-bold mb-6 text-blue-500">Welcome to My App</h1>
      <p class="text-lg text-gray-700 mb-6">
        This is a beautiful landing page created with Tailwind CSS. Explore the features and enjoy the experience.
      </p>
      <div class="flex justify-center space-x-4">
        <RouterLink to="/registration" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </RouterLink>
        <RouterLink to="/about" class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300">
          Learn More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style scoped>
/* Add any additional styles here */
</style>