import { defineConfig, type UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'
import pkg from './package.json'
const globals = {
  vue: 'Vue',
  'lodash-es': 'lodashEs',
  'element-resize-detector': 'elementResizeDetectorMaker'
}
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config: UserConfigExport = {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
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
    // config.build = {
    //   rollupOptions: {
    //     external: [...Object.keys(pkg.dependencies), ...Object.keys((pkg.peerDependencies))],
    //     // input: path.resolve(__dirname, 'src/index.js'),
    //     // output: [
    //     //   {
    //     //     format: 'es',
    //     //     preserveModules: false,
    //     //     entryFileNames: '[name].mjs',
    //     //     dir: './dist/es',
    //     //     exports: "named"
    //     //   },
    //     //   {
    //     //     format: 'cjs',
    //     //     preserveModules: false,
    //     //     entryFileNames: '[name].js',
    //     //     dir: './dist/lib',
    //     //     exports: "named"
    //     //   }
    //     // ]
    //   },
    //   lib: {
    //     entry: path.resolve(__dirname, 'src/index.js'),
    //     formats: ['cjs', 'es'],
    //     name: 'rookieui',
    //     fileName: 'rookie-ui'
    //   }
    // }
  }
  return config
})
