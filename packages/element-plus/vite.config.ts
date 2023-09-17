// import { defineConfig, type UserConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import jsx from '@vitejs/plugin-vue-jsx'
// import path from "node:path"
// import pkg from './package.json'
// console.log(import.meta.url)
// console.log(process.env.NODE_ENV, process.env.BUILD_TYPE, process.env.TYPE)

// export default defineConfig(({ command, mode }): UserConfig => {
//   return {
//     plugins: [
//       vue(),
//       jsx()
//     ],
//     build: {
//       rollupOptions: {
//         external: [...Object.keys(pkg.dependencies), ...Object.keys((pkg.peerDependencies))]
//       },
//       lib: {
//         entry: path.resolve(__dirname, 'src/components/index.ts'),
//         name: 'rookieElementPlus',
//         fileName: 'rookie-element-plus',
//         formats: ["es", "cjs"]
//       }
//     },
//     resolve: {
//       alias: {
//         '@rookie-element-plus': path.resolve(__dirname)
//       },
//       extensions: ['.js', '.json', '.ts']
//     }
//   }
// })
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import path from 'path';
import pkg from './package.json'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
const external: string[] = Object.keys(pkg.dependencies).concat(Object.keys(pkg.devDependencies))
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      reporter: ['text', 'json'],
    },
  },
  build: {
    //压缩
    sourcemap: true,
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
    treeshake: {
      moduleSideEffects: false
    },
    external: ['vue', 'element-plus', /^@vue/, /^@element-plus\/(.*)/, '@rookie-ui/utils', /^lodash(.*)/],
      input: ['./src/index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          preserveModulesRoot: path.resolve(__dirname, 'src'),
          // exports: 'named',
          //配置打包根目录
          dir: 'dist/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: path.resolve(__dirname, 'src'),
          exports: 'named',
          //配置打包根目录
          dir: 'dist/lib'
        }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'rookie-ui'
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      // entryRoot: 'src',
      outputDir: ['dist/es', 'dist/lib'],
      include: ['src/**/*.ts', 'src/**/*.vue'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    // ElementPlus({}),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ]
});
