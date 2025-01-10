<!-- src/components/HelloWorld.vue -->
<template>
  <div class="hello">
    <h1>Welcome!</h1>
    <div>
      <p id="answer">{{ answer }}</p>
      <input id="message" v-model="inputMessage" placeholder="Type a message" />
      <button @click="sendMessage">Send message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      answer: 'No answer yet',
      inputMessage: ''
    }
  },
  methods: {
    sendMessage() {
      this.answer = this.inputMessage
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
