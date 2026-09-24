import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  base: "/portfolio/", // Add this exact line with your repo name!
  plugins: [react()],
  // ... rest of your config
})
