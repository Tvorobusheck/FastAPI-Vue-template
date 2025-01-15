// vitest.config.ts
import { defineConfig } from 'vitest/config'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Use jsdom for testing (simulates a browser environment)
    globals: true,         // Enables Jest-style globals like describe, it, expect
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Automatically resolve index.vue
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
})
