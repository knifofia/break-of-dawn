import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base : '/break-of-dawn/',
  // server: {
  //   host: '0.0.0.0',          // allow access from other devices
  //   port: 5173,
  //   strictPort: true,          // optional, fail if port is busy
  //   allowedHosts: ['.ngrok-free.app']  // allow ngrok subdomains
  // },
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Svelte PWA',
        short_name: 'SveltePWA',
        description: 'Une Progressive Web App avec Svelte et Vite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/break-of-dawn/',
        icons: [
          {
            src: '/break-of-dawn/image/BOD-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/break-of-dawn/image/BOD-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
        screenshots: [
          {
            src: '/break-of-dawn/image/BOD-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Application'
          },
          {
            src: '/break-of-dawn/image/BOD-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            label: 'Application'
          }
        ]
      }
    })
  ]
})
