// import typescript from '@rollup/plugin-typescript'
import terser from "@rollup/plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { createRequire } from 'node:module';
// import renameNodeModules from "rollup-plugin-rename-node-modules";
import renameNodeModules from './plugin'
// import filesize from 'rollup-plugin-filesize';
// import babel from 'rollup-plugin-babel'
import path from 'node:path';
// import pkg from './package.json'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')
const externals = [...Object.keys(pkg.devDependencies), ...Object.keys(pkg.peerDependencies)]
const regexesOfPackages = externals
  .map(packageName => new RegExp(`^${packageName}(\/.*)?`));
export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    dir: 'dist/es',
    sourcemap: false,
    name: 'bundle',
    preserveModules: true,
    preserveModulesRoot: path.resolve(import.meta.url, 'src'),
    exports: 'named',
  },
  plugins: [
    // typescript(),
    nodeResolve(),
    postcss({
      plugins: [
        autoprefixer()
      ]
    }),
    vuePlugin({
      style: { // 添加前缀
        postcssPlugins: [autoprefixer()]
      }
    }),
    renameNodeModules("dependencies", /node_modules(.*)node_modules/i),
    commonjs(),
    terser(),
    // filesize()
  ],
  // external: regexesOfPackages,
  external: externals,
  treeshake: {
    moduleSideEffects: false
  }
}
// export default {}