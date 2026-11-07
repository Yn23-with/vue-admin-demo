import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-admin-demo/', //仓库名字，前后斜杠不能丢！
  plugins: [vue()],
})
