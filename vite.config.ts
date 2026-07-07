import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import pkg from './package.json'

function versionPlugin(): Plugin {
  return {
    name: 'version-json',
    writeBundle({ dir }) {
      const out = dir || resolve(__dirname, 'dist')
      writeFileSync(
        resolve(out, 'version.json'),
        JSON.stringify({ v: Date.now() }),
      )
    },
  }
}

export default defineConfig({
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  server: { port: 5174, host: true },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-css',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-woff',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      manifest: false,
    }),
    versionPlugin(),
  ],
})
