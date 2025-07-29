import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Lista_Tarefas/', // <-- O nome do repositório, com / no início e fim
  plugins: [react()],
})
