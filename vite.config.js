import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/ReactRouter/', // ✅ This prepends /ReactRouter/ to all paths
  plugins: [react()],
})
