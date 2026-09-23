import { defineConfig } from 'vite'
import react from '@react-plugin/vite'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 👈 Make sure this matches your repository name exactly
})
