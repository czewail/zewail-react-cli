const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const exists = require('fs').existsSync
const shell = require('shelljs')

// 需要新建的项目仓库地址
const origin = 'czewail/zewail-react'
// 分支
const branch = '#master'

// 执行命令的目录
const cwd = process.cwd()

module.exports = function (args) {

  const autoInstall = !(args[3] === '--no-install')

  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'input project name (zewail-react-template):',
  }]).then(function (answers) {
    
    const targetPath = path.join(cwd, answers.name || 'zewail-react-template')

    // 目录已存在
    if (exists(targetPath)) {
      console.log(chalk.red('exit: directory is already exists'))
      return
    }

    const spinner = ora('downloading template from https://github.com/czewail/zewail-react...')
    spinner.start()
    download(`${origin}${branch}`, targetPath, { clone: false }, function (err) {
      spinner.stop()
      if (err) {
        console.log(chalk.red(`Failed to download repo https://github.com/${origin}${branch}`, err))
      } else {
        console.log(chalk.green(`Success to download repo https://github.com/${origin}${branch} to ${targetPath}`))
        // 不安装依赖
        if (!autoInstall) {
          console.log('')
          console.log('you can run command by youself:')
          console.log('   npm install or cnpm install')
          console.log('')
          return
        }
        // 开始安装依赖
        const spinnerInstall = ora('Auto installing dependencies with command: npm install...')
        spinnerInstall.start()
        shell.exec(`cd ${targetPath} && npm install`, function () {
          console.log(chalk.green(npm + ' install end'))
          spinnerInstall.stop()
          console.log('Visit https://github.com/czewail/zewail-react to learn more.')
        })
      }
    })
  })

  
}