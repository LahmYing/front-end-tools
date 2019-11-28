// no change compare to company template
'use strict'
// 定制控制台日志的输入样式
const chalk = require('chalk')
// 加载语义化版本测试库
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec (cmd) {
  // require('child_process')调用 nodejs 子进程，
  // execSync 同步的 exec 方法执行 command
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    // semver.clean 格式化版本号，如 ‘v7.1.0’ => '7.1.0'
    // currentVersion 取 node 版本
    currentVersion: semver.clean(process.version),
    // 从package.json读取node版本要求
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    // 判断现有版本是否满足要求
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    // 按照linux的规范，一般成功用0表示，而非0则表示失败。存在不满足版本要求的模块，执行失败
    process.exit(1)
  }
}
