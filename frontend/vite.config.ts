import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
import dotenv from 'dotenv'

// Load environment variables from .env
dotenv.config({ path: '.env' })

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      // Automatically resolve index.vue
      extensions: ['.ts', '.js', '.vue', '.json'],
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      VitePWA({
        registerType: 'autoUpdate', // Service worker auto-update
        devOptions: {
          enabled: true // Enable PWA support in dev mode for easier testing
        },
        manifest: {
          name: 'Vite PWA',
          short_name: 'VitePWA',
          description: 'A PWA built with Vite',
          theme_color: '#ffffff',
        },
        workbox: {
          globPatterns: ["**/*"],
        },
        includeAssets: ["**/*"],
      }),
    ],
  }
})