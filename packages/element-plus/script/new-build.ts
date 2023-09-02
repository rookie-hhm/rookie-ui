import { rollup } from "rollup";
import { excludeFiles } from "@rookie-ui/utils";
import glob from 'fast-glob'
import path from 'path';
import esbuild from 'rollup-plugin-esbuild'
import { buildConfigEntries, writeBundles, target } from './build-info'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/rollup'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { OutputOptions } from 'rollup'
import pkg from '../package.json'
const buildModules = async () => {
  const input = excludeFiles(
    await glob(['**/*.{js,ts,vue}'], {
      cwd: path.resolve(__dirname, '../src'),
      absolute: true,
      onlyFiles: true,
    })
  )
  console.log(input, 'input')
  const bundle = await rollup({
    input,
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false,
          }),
          vueJsx: vueJsx(),
        },
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      // ts(),
      // vue(),
      // vueJsx(),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: path.resolve(process.cwd(), 'src/entry'),
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
buildModules()