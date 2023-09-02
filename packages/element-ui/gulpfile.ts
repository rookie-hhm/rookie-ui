import path from 'node:path'
import fse from 'fs-extra'
import { src, dest, parallel, series } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass';
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import chalk from 'chalk'
import { spawn } from 'node:child_process';
import consola from 'consola'
import { sync } from 'rimraf';
const sass = gulpSass(dartSass)

const sourcePath = path.resolve(__dirname, 'src/theme-chalk')
const distPath = path.resolve(__dirname, 'theme-chalk')
const esPath = path.resolve(__dirname)
// 复制源码到目标目录下
const copySourceThemeChalk = () => {
  return src(`${sourcePath}/**`).pipe(
    dest(distPath)
  )
}

const buildThemeChalk = () => {
  return src(`${sourcePath}/*.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCss({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    // .pipe(
    //   rename((path) => {
    //     if (!noElPrefixFile.test(path.basename)) {
    //       path.basename = `el-${path.basename}`
    //     }
    //   })
    // )
    .pipe(dest(distPath))
}

const copyBundleThemeChalk = () => {
  return src(`${distPath}/**`).pipe(
    dest(path.resolve(__dirname, 'es/theme-chalk'))
  ).pipe(dest(path.resolve(__dirname, 'lib/theme-chalk')))
}
const removeExtraCssFile = async () => {
  console.log(typeof sync)
  fse.removeSync(path.join(esPath, 'es/index.css'))
  fse.removeSync(path.join(esPath, 'lib/index.css'))
  fse.removeSync(path.join(__dirname, 'theme-chalk'))
  // sync([
  //   path.join(esPath, 'es/index.css'),
  //   path.join(esPath, 'lib/index.css')
  // ])
}

const build = parallel(
  // copySourceThemeChalk,
  series(buildThemeChalk, copyBundleThemeChalk, removeExtraCssFile)
)

export default build
// export default 
// export {
//   build
// }
// const root = path.resolve(__dirname)
// const run = async (cmd, cwd: string = root) => {
//   return new Promise<void>((resolve, reject) => {
//     const [command, ...args] = cmd.split(' ')
//     const child = spawn(command, args, {
//       cwd,
//       stdio: 'inherit',
//       shell: process.platform === 'win32'
//     })
//     child.on('error', (code) => {
//       reject(code)
//     })
//     child.on('exit', code => {
//       if (code === 0) {
//         resolve()
//       } else {
//         reject(code)
//       }
//     })
//   })
// }
// const a = () => run('pnpm run start a')
// a.displayName = 'a'
// const b = () => run('pnpm run start b')
// b.displayName = 'b'
// export default series(
//   a,
//   b
// )