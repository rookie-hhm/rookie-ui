import path from 'node:path'
import { src, dest, parallel, series } from 'gulp'
import fse from 'fs-extra'
import gulpSass from 'gulp-sass'
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import chalk from 'chalk'
import consola from 'consola'
const sass = gulpSass(dartSass)
import { run } from './utils'
const  sourcePath = path.resolve(__dirname, '../src/')
const distPath =  path.resolve(__dirname, '../dist')
console.log(sourcePath, 'sourcePath')
const removeDist = async () => {
  fse.emptyDirSync(distPath)
}
const buildThemeChalk = () => {
  return src(`${sourcePath}/**/*.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCss({}, (details: any) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(dest(`${distPath}/es/`))
    .pipe(dest(`${distPath}/lib/`))
}

const build = series(
  removeDist,
  async () => run('pnpm run build:vite'),
  async () => buildThemeChalk()
)


export default build
