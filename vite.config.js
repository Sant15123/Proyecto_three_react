import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Proyecto_three_react/', // 👈 importante, coincide con el repo
})


