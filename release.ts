/**
 * 发布脚本，使用xbird发布平台跟随tag的功能发布
 * 因此，需要发版前需要在本地打tag
 */
// const path = require('path')
// const fs = require('fs-extra')
// const execa = require('execa')
// const chalk = require('chalk')
// const fsPromise = require('fs').promises
import path from 'path'
import fs from 'fs-extra'
import { execa } from 'execa'
import chalk from 'chalk'
import { promises as fsPromise } from 'fs'

/* 这三个都是发布平台环境变量
* RELEASE_VERSION 发布的版本号
* GIT_BRANCH 当前git的分支
* DIST_TAG 发布的版本beta/latest/pre
*/
let { RELEASE_VERSION = '', GIT_BRANCH, DIST_TAG } = process.env
RELEASE_VERSION = '2.0.0'
console.log(process.argv, 'argv')
const makeResolve = (target: string) => (file: string) => path.resolve(__dirname, `packages/${target}`, file)

if (RELEASE_VERSION.includes('beta')) {
  DIST_TAG = 'beta'
} else if (RELEASE_VERSION.includes('rc')) {
  DIST_TAG = 'rc'
} else {
  DIST_TAG = 'latest'
}

// 修改所有packages的版本号
async function changeVersion () {
  console.log(chalk.blue('更改版本号'))
  const projectPath = path.resolve(__dirname, 'packages')
  const targets = await fsPromise.readdir(projectPath)
  for (let target of targets) {
    const resolve = makeResolve(target)
    const packagePath = resolve('package.json')

    const packageJSON = require(packagePath)
    packageJSON.version = RELEASE_VERSION

    fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
  }
}

// 将修改后的版本号提交到gitlab
async function commit () {
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', RELEASE_VERSION])
  // NOTE 不需要 push，xbird在流程走完后会统一push
  // await execa('git', ['push','origin', GIT_BRANCH])
}

// 发布到npm
async function publish () {
  console.log(chalk.blue('发布到npm',DIST_TAG))
  const projectPath = path.resolve(__dirname, 'packages')
  const targets = await fsPromise.readdir(projectPath)
  for (let target of targets) {
    const resolve = makeResolve(target)
    const targetDir = resolve('./')
    console.log(targetDir, 'targetDir')
    await execa('pnpm', ['publish', '--tag', DIST_TAG, '-no-git-checks'], {
      stdio: 'inherit',
      cwd: targetDir
    })
  }
}

async function start () {
  changeVersion()
  // await commit()
  await publish()
}

start()
