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
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
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
