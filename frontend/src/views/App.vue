<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Loading />
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">My App</div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <RouterLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Go to Home</RouterLink>
            <RouterLink to="/profile" id="nav-profile" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Profile</RouterLink>
            <RouterLink to="/registration" id="nav-registration" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Registration</RouterLink>
            <RouterLink to="/login" id="nav-login" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Login</RouterLink>
            <RouterLink to="/logout" id="nav-logout" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">Logout</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <main class="flex-grow flex items-center justify-center container mx-auto p-4 bg-gray-100">
      <RouterView class="w-full" />
    </main>
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        <p class="mb-2">Contact Us</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Loading from '@/components/Loading.vue'
import '@/index.css'

export default defineComponent({
  name: 'App',
  components: {
    Loading
  },
  setup() {
    const isMenuOpen = ref(false)
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    return {
      isMenuOpen,
      toggleMenu
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
