// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // If deploying to a subfolder or getting 404s on reload, try `base: './'`.
  // If using a custom domain root, base: '/' is also fine.
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Remove this next line or set it to true so CSS is not all jammed in one file:
    // cssCodeSplit: true, 
    rollupOptions: {
      output: {
        // This is optional. If you prefer default naming, remove it
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/styles.[hash].css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
