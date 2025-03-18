import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/porto-lisa-freelance/', // for github pages deployment. for dev, you can commment this line
  build: {
    outDir: 'dist',
  }
})