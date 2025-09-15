import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})