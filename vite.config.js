import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'build', // 👈 important: so Render finds it
  },
  base: './', // for relative paths
})