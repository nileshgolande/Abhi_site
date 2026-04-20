import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use './' so assets resolve on GitHub Pages project sites (e.g. user.github.io/repo-name/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
