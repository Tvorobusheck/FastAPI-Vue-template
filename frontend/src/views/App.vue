<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <ItemComponent />
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import ItemComponent from '@/components/Item.vue'

export default {
  name: 'App',
  components: {
    ItemComponent
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
