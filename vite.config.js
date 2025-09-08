import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    })
  ],
  base: process.env.NODE_ENV === 'production' ? '/fathi-belmkadem.github.io/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          ui: ['framer-motion', 'styled-components'],
          mui: ['@mui/material', '@mui/icons-material', '@mui/lab']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion',
      'styled-components',
      'maath/random/dist/maath-random.esm',
      '@mui/material',
      '@mui/icons-material',
      '@mui/lab'
    ],
    exclude: ['@mediapipe/tasks-vision']
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
