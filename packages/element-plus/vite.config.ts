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

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import path from 'path';
export default defineConfig({
  build: {
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['./src/index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: path.resolve(__dirname, 'src'),
          exports: 'named',
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
    // {
    //   name: 'style',
    //   generateBundle(config, bundle) {
    //     //这里可以获取打包后的文件目录以及代码code
    //     const keys = Object.keys(bundle);

    //     for (const key of keys) {
    //       const bundler: any = bundle[key as any];
    //       //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

    //       this.emitFile({
    //         type: 'asset',
    //         fileName: key, //文件名名不变
    //         source: bundler.code.replace(/\.scss/g, '.css')
    //       });
    //     }
    //   }
    // }
  ]
});
