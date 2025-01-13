import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Automatically resolve index.vue
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    vue(),
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
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
