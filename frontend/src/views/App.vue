<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <ItemComponent />
    <button @click="goToRegistration">Go to Registration</button>
  </div>
</template>

<script>
import ItemComponent from '@/components/Item.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    ItemComponent
  },
  setup() {
    const router = useRouter();
    const goToRegistration = () => {
      router.push('/registration');
    };
    return { goToRegistration };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
