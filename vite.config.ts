import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

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
  plugins: [react(), versionPlugin()],
})
