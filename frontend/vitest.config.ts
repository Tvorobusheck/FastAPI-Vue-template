// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Use jsdom for testing (simulates a browser environment)
    globals: true,         // Enables Jest-style globals like describe, it, expect
  },
})
