import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/LandingPage_JangHubTech/",
  plugins: [
    tailwindcss(),
    react()
  ],
})