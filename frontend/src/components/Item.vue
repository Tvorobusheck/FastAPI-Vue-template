<template>
    <form @submit.prevent="submitForm">
      <div v-for="(field, index) in fields" :key="index" class="form-group">
        <label :for="field.name">{{ field.name }}</label>
        <input
          v-if="field.type === 'string'"
          v-model="formData[field.name]"
          :type="field.type"
          :id="field.name"
          class="form-control"
          :placeholder="'Enter ' + field.name"
        />
        <!-- You can add other input types for different field types (e.g., number, date) -->
      </div>
  
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import * as api from '@/api/';

  export default defineComponent({
    name: 'DynamicForm',
    data() {
      return {
        formData: new api.ItemCreateSchema(), // Create an instance of the schema
        fields: api.ItemCreateSchema.getAttributeTypeMap(), // Get the attribute map from the schema
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.formData);
        // Handle form submission logic here
      },
    },
  });
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  