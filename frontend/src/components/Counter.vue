<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <el-button type="danger" @click="decrement">Minus</el-button>
        <el-button type="success" @click="increment">Plus</el-button>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-alert type="info" :value="true" class="mt-4">
          Current Count: {{ counter }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      /**
       * The current count value.
       * @type {number}
       */
      counter: 0
    };
  },
  methods: {
    /**
     * Increments the counter by 1.
     */
    increment() {
      this.counter++;
    },

    /**
     * Decrements the counter by 1.
     */
    decrement() {
      this.counter--;
    }
  }
};
</script>

<style scoped>
.v-btn {
  font-size: 16px;
}
</style>
