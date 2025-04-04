<template>
  <div id="app" class="flex flex-col min-h-screen">
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
            <RouterLink v-if="logedIn" to="/profile" id="nav-profile" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Profile</RouterLink>
            <RouterLink v-if="logedIn" to="/items" id="nav-items" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Items</RouterLink>
            <RouterLink v-if="!logedIn" to="/registration" id="nav-registration" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Registration</RouterLink>
            <RouterLink v-if="!logedIn" to="/login" id="nav-login" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">Login</RouterLink>
            <RouterLink v-if="logedIn" to="/logout" id="nav-logout" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">Logout</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <Loading />
    <main class="flex-grow flex items-center justify-center container mx-auto p-4 bg-gray-100">
      <RouterView class="w-full" @authEvent="handleAuthEvent"/>
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
import { defineComponent, ref, onMounted } from 'vue'
import Loading from '@/components/Loading.vue';
import '@/index.css'
import { clearJwtToken, isLogedIn, setJwtToken } from '@/utils/auth';
import { AuthApi } from '@/api';
import { apiConfiguration } from '@/utils/server';

/**
 * Reactive variable to track if the user is logged in.
 * @type {import('vue').Ref<boolean>}
 */
const logedIn = ref(isLogedIn());

export default {
  name: 'App',
  components: {
    Loading
  },
  methods: {
    /**
     * Handles authentication events and updates the logged-in state.
     */
    handleAuthEvent() {
      logedIn.value = isLogedIn();
    },

    /**
     * Refreshes the JWT token if the user is logged in.
     * Logs an error if the refresh fails.
     * @async
     */
    async refreshJwtToken() {
      if (logedIn.value) {
        try {
          const authApi = new AuthApi(apiConfiguration());
          await authApi.refreshJwtUsersJwtRefreshPost();
        } catch (error) {
          console.error('Error refreshing JWT token:', error);
        }
      }
    }
  },
  setup() {
    /**
     * Reactive variable to track if the navigation menu is open.
     * @type {import('vue').Ref<boolean>}
     */
    const isMenuOpen = ref(false);

    /**
     * Toggles the state of the navigation menu.
     */
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    /**
     * Lifecycle hook to refresh the JWT token on component mount.
     * Clears the token if the refresh fails.
     * @async
     */
    onMounted(async () => {
      if (logedIn.value) {
        const authApi = new AuthApi(apiConfiguration());
        try {
          setJwtToken(await authApi.refreshJwtUsersJwtRefreshPost());
        } catch (error) {
          clearJwtToken();
          console.error('Error refreshing JWT token on mount:', error);
        }
      }
    });

    return {
      isMenuOpen,
      toggleMenu,
      logedIn
    };
  }
};
</script>

<style>
/* Styles for the main app container */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
