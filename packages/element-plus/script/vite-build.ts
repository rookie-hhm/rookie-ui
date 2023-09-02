import { build, type InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
import { series, parallel } from 'gulp'
import glob from 'fast-glob'
import { resolve, join } from 'path';
const rootDir = resolve(__dirname, '..')
let targets: any[] = []
const commonConfig = {
  external: ['vue', /\.scss/]
}
const baseViteConfig = {
  configFile: false,
  plugins: [
    
  ]
}
const getTargets = () => {
  const fileList = glob.sync(
    ['src/**/*.vue', 'src/**/*.ts', '!src/**/*.test.ts', '!src/**/*.d.ts'], {
    cwd: resolve(__dirname, '..')
  })
  targets = ['index.ts', ...fileList]

  targets = targets.map(target => {
    const lastIndex = target.lastIndexOf('/')
    return {
      relative: target.slice(0, lastIndex === -1 ? 0 : lastIndex),
      absolute: join(rootDir, target)
    }
  })
  console.log(targets, 'targets')
}

const buildDeclareFile = async (target: TargetType) => {
  build({
    configFile: false,
    build: {
      lib: {
        entry: target.absolute
      }
    },
    plugins: [
      vue(),
      dts({
        root: join(rootDir),
        entryRoot: join(rootDir, 'src'),
        outputDir: ['dist/es/src', 'dist/lib/src'],
        include: target.absolute,
        tsConfigFilePath: '../../tsconfig.json'
      })
    ]
  })
}
type TargetType = {
  relative: string
  absolute: string
}
const isRootFile = (path: string) => /^index\.ts/.test(path)
const buildBundle = async (target: TargetType) => {
  console.log(target.relative, 'target.relative')
  const dir = isRootFile(target.relative) ? '' : target.relative
  await build({
    configFile: false,
    build: {
      //压缩
      //minify: false,
      rollupOptions: {
        //忽略打包vue文件
        external: ['vue', /\.scss/],
        input: target.absolute,
        output: [
          {
            //打包格式
            format: 'es',
            //打包后文件名
            entryFileNames: '[name].mjs',
            //让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named',
            //配置打包根目录
            dir: join(rootDir, `dist/es/${dir}`)
          },
          {
            //打包格式
            format: 'cjs',
            //打包后文件名
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            //配置打包根目录
            dir: join(rootDir, `dist/lib/${dir}`)
          }
        ]
      },
      lib: {
        entry: target.absolute,
        name: 'rookie-ui'
      }
    },
    plugins: [
      vue(),
      dts({
        root: join(rootDir),
        entryRoot: join(rootDir, 'src'),
        outputDir: ['dist/es/src', 'dist/lib/src'],
        include: target.absolute,
        tsConfigFilePath: '../../tsconfig.json'
      }),
      DefineOptions(),
      {
        name: 'style',
        generateBundle(config, bundle) {
          //这里可以获取打包后的文件目录以及代码code
          const keys = Object.keys(bundle);
          for (const key of keys) {
            const bundler: any = bundle[key as any];
            //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
            this.emitFile({
              type: 'asset',
              fileName: key, //文件名名不变
              source: bundler.code.replace(/\.scss/g, '.css')
            });
          }
        }
      }
    ]
  })
}

const buildAllDeclarationFile = () => {
  targets.forEach(target => {
    buildDeclareFile(target)
  })
}
const buildAllBundle = async () => {
  for (let i = 0; i < targets.length; i++) {
    await buildBundle(targets[i])
  }
  
}
const copyDeclarationFile = () => {
  // const dts = glob.sync(['src/**/*.d.ts', '!src/**/*.test.ts'])
  // const 
}

export default series(
  async () => getTargets(),
  async () => buildAllBundle(),
  // async () => buildAllDeclarationFile()
  // parallel(
  //   async () => buildAllBundle(),
  //   async () => buildAllDeclarationFile(),
  // ),
  // copyDeclarationFile()
)



