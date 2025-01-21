// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// Load environment variables from .test.env
dotenv.config({ path: 'env/.test.env' })

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
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
  }
})