import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  build: {
    //压缩
    minify: false,
    rollupOptions: {
      input: './src/index.ts',
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, './dist/es'),
          banner: '/* eslint-disable */'
        },
        // {
        //   format: 'cjs',
        //   //不用打包成.mjs
        //   entryFileNames: '[name].js',
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   //配置打包根目录
        //   dir: resolve(__dirname, './dist/lib'),
        //   banner: '/* eslint-disable */'
        // }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'rookie-ui-utils'
    }
  },

  plugins: [
    dts({
      outputDir: [
        resolve(__dirname, './dist/es'),
        // resolve(__dirname, './dist/lib')
      ],
      compilerOptions: {
        declaration: true,
      },
      include: ['./src/**/*.ts'], // 覆盖掉根目录下的tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    })
  ]
});
