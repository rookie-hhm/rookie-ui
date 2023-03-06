import { defineConfig, type UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'
import pkg from './package.json'

export default defineConfig(({ command, mode, ssrBuild }) => {
  const config: UserConfigExport = {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': './'
      }
    }
  }
  if (command === 'serve') {
    config.server = {
      port: 4000
    }
    return config
  } else {
    // command === 'build'
    config.build = {
      rollupOptions: {
        external: [...Object.keys(pkg.dependencies), ...Object.keys((pkg.peerDependencies))],
        output: {
          globals: {
            vue: 'Vue',
            'lodash-es': 'lodashEs',
            'element-resize-detector': 'elementResizeDetectorMaker'
          }
        }
      },
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        formats: ['cjs', 'es', 'iife', 'umd'],
        name: 'rookieui',
        fileName: 'rookie-ui'
      }
    }
  }
  return config
})
