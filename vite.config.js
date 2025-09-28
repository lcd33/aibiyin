import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const resolvePath = (dir) => path.resolve(__dirname, dir)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/variable.scss" as *;`
      }
    }
  }
})
