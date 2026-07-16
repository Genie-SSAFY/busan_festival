import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 혹시 경로 단축 설정(@)이 필요할 때를 대비해 기본 설정해 둡니다.
      '@': '/src'
    }
  }
})