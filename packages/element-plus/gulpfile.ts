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
import fse from 'fs-extra'
const sass = gulpSass(dartSass)

const sourcePath = path.resolve(__dirname, 'src/theme-chalk')
const distPath = path.resolve(__dirname, 'theme-chalk')
const bundlePath = path.resolve(__dirname, 'dist')

const run =  (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve) => {
    const child = spawn(cmd, args, {
      cwd: path, //执行命令的路径
      stdio: 'inherit', //输出共享给父进程
      shell: true //mac不需要开启，windows下git base需要开启支持
    });
    //执行完毕关闭并resolve
    child.on('close', resolve);
  });
};

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
    .pipe(dest(path.resolve(bundlePath, 'es/theme-chalk')))
    .pipe(dest(path.resolve(bundlePath, 'lib/theme-chalk')))
}

// const copyBundleThemeChalk = () => {
//   return src(`${distPath}/**`).pipe(
//     dest(path.resolve(__dirname, 'es/theme-chalk'))
//   ).pipe(dest(path.resolve(__dirname, 'lib/theme-chalk')))
// }
const removeExtraCssFile = async () => {
  console.log(typeof sync)
  // fse.removeSync(path.join(esPath, 'es/index.css'))
  // fse.removeSync(path.join(esPath, 'lib/index.css'))
  // fse.removeSync(path.join(__dirname, 'theme-chalk'))
}
const copyDeclarationFile = async () => {
  console.log('copy')
  fse.copySync(path.resolve(__dirname, 'types'), path.resolve(bundlePath, 'types'))
}
const buildComponent = async () => {
  console.log('buildComponent')
  await run('npm run build:vite', path.resolve(__dirname))
}

const removeDist = async () => {
  fse.pathExistsSync(bundlePath) && sync(bundlePath)
}

const build = series(
  async () => removeDist(),
  async () => buildComponent(),
  async () => buildThemeChalk(),
  series(
    // parallel(
    //   async () => await buildComponent(),
    //   series(buildThemeChalk, removeExtraCssFile),
    // ),
    async () => copyDeclarationFile()
  )
)

export default build