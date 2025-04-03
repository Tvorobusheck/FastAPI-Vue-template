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
import { defineComponent } from 'vue';
import * as api from '@/api'; // Import the generated API client
import { ref } from 'vue';

export default defineComponent({
  name: 'DynamicForm',
  data() {
    return {
      /**
       * The form data object, initialized with the schema.
       * @type {api.ItemCreateSchema}
       */
      formData: new api.ItemCreateSchema(),

      /**
       * The list of fields to dynamically generate the form.
       * @type {Array<{ name: string, type: string }>}
       */
      fields: api.ItemCreateSchema.getAttributeTypeMap(),
    };
  },
  methods: {
    /**
     * Handles the form submission.
     * Logs the form data and sends it to the API.
     * @async
     */
    async submitForm() {
      console.log('Form submitted:', this.formData);

      // Create configuration parameter object
      const configurationParameters = {
        baseServer: new api.ServerConfiguration('http://localhost:8000', {}), // First server is default
      };

      /**
       * The API configuration object.
       * @type {api.Configuration}
       */
      const configuration = api.createConfiguration(configurationParameters);

      /**
       * The API instance for interacting with the Items API.
       * @type {api.ItemsApi}
       */
      const apiInstance = new api.ItemsApi(configuration);

      try {
        // Send the form data to the API
        await apiInstance.endpointItemsPost(this.formData);
        console.log('Item successfully created.');
      } catch (error) {
        console.error('Error creating item:', error);
      }
    },
  },
});
</script>

<style scoped>
/**
 * Styles for the form group container.
 */
.form-group {
  margin-bottom: 1rem;
}
</style>
