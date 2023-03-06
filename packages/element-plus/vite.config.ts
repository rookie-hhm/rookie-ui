import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import path from "node:path"

console.log(import.meta.url)
console.log(process.env.NODE_ENV, process.env.BUILD_TYPE, process.env.TYPE)

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [
      vue(),
      jsx()
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/index.ts'),
        name: 'rookieElementPlus',
        fileName: 'rookie-element-plus',
        formats: ["es", "cjs", "umd", "iife"]
      }
    },
    resolve: {
      alias: {
        '@element-plus': path.resolve(__dirname)
      },
      extensions: ['.js', '.json', '.ts']
    }
  }
})