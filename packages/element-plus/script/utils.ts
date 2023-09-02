import { spawn } from 'child_process'
const root = process.cwd()
const run = async (cmd: string, cwd: string = root) => {
  return new Promise<void>((resolve, reject) => {
    const [command, ...args] = cmd.split(' ')
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    })
    child.on('error', (code: number) => {
      reject(code)
    })
    child.on('exit', (code: number) => {
      if (code === 0) {
        resolve()
      } else {
        reject(code)
      }
    })
  })
}

export {
  run
}