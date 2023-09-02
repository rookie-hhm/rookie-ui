import { build, defineConfig, type UserConfigExport, InlineConfig } from 'vite';
import path from 'node:path'
import fs from 'node:fs'
import vue from '@vitejs/plugin-vue2'
import pkg from './package.json'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

// const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, 'src/components') // 入口文件夹
const outputDir = path.resolve(__dirname, 'dist') // 打包后的文件夹


const baseConfig = {
  configFile: false,
  publicDir: false,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

const rollupOptions = {
  external: [...Object.keys(pkg.dependencies), ...Object.keys((pkg.peerDependencies))],
}

const singleOptions = (name) => ({
  ...rollupOptions,
  input: path.resolve(entryDir, name, 'index.js'),
  output: [
    {
      format: 'es',
      preserveModules: false,
      entryFileNames: '[name].js',
      dir: `./es/${name}`,
      exports: "named",
      // plugins: [getBabelOutputPlugin({
      //   presets: ['@babel/preset-env'],
      //   plugins: [
      //     [
      //       "component",
      //       {
      //         "libraryName": "element-ui",
      //         "styleLibraryName": "theme-chalk"
      //       }
      //     ]
      //   ]
      // })]
    },
    {
      format: 'cjs',
      preserveModules: false,
      entryFileNames: '[name].js',
      dir: `./lib/${name}`,
      exports: "named"
    }
  ]
})

const allConfig = {
  ...baseConfig,
  build: {
    rollupOptions: {
      ...rollupOptions,
      output: [
        {
          format: 'es',
          preserveModules: false,
          entryFileNames: '[name].js',
          dir: `./es`,
          exports: "named",
          // plugins: getBabelOutputPlugin({
          //   presets: ['@babel/preset-env'],
          //   plugins: [
          //     [
          //       "component",
          //       {
          //         "libraryName": "element-ui",
          //         "styleLibraryName": "theme-chalk"
          //       }
          //     ]
          //   ]
          // })
        },
        {
          format: 'cjs',
          preserveModules: false,
          entryFileNames: '[name].js',
          dir: `./lib`,
          exports: "named"
        }
      ]
    },
    lib: {
      entry: path.resolve(entryDir, '../index.js')
    },
    cssCodeSplit: true
    // outDir: outputDir,
  }
}

const singleConfig = (name: string) => {
  console.log(path.resolve(entryDir, name), 'path.resolve(entryDir, name)')
  return {
    ...baseConfig,
    build: {
      rollupOptions: singleOptions(name),
      lib: {
        entry: path.resolve(entryDir, name, 'index.js'),
        // name: 'index',
        // fileName: 'index',
        // formats: ['es', 'umd']
      },
      cssCodeSplit: true
      // outDir: path.resolve(outputDir, name)
    }
  }
}
//全量构建
const buildAll = async () => {
  await build(allConfig as any)
}


const buildSingle = async (name) => {
  await build(singleConfig(name) as any)
}

// 生成组件的 package.json 文件
// const createPackageJson = (name) => {
//   const fileStr = `{
//   "name": "${name}",
//   "version": "0.0.0",
//   "main": "index.umd.js",
//   "module": "index.es.js",
//   "style": "style.css"
// }`

//   fsExtra.outputFile(
//     path.resolve(outputDir, `${name}/package.json`),
//     fileStr,
//     'utf-8'
//   )
// }


const buildLib = async () => {
  await buildAll()
  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return (isDir && fs.readdirSync(componentDir).includes('index.js'))
  })

  // 循环一个一个组件构建
  for (const name of components) {
    // 构建单组件
    await buildSingle(name)

    // 生成组件的 package.json 文件
    // createPackageJson(name)
  }
  // 删除打包目录下的style.css文件
  const esStyle = path.resolve(__dirname, 'es/style.css')
  const libStyle = path.resolve(__dirname, 'lib/style.css')
  fs.existsSync(esStyle) && fs.rmSync(esStyle)
  fs.existsSync(libStyle) && fs.rmSync(libStyle)
}

buildLib()