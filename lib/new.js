const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const fs = require('fs-extra')
const shell = require('shelljs')

const cwd = process.cwd()
const templateDir = path.join(__dirname, '../template')

module.exports = function (args) {
  const newListQuestions = [{
    type: 'list',
    name: 'type',
    message: 'which type of scaffold do you want to new ?',
    choices: [
      'component',
      'container',
      'saga',
      'reducer'
    ]
  }]
  inquirer.prompt(newListQuestions).then(function(answers) {
    switch(answers.type) {
      case 'component':
        component()
        break
      case 'container':
        container()
        break
      case 'reducer':
        reducer()
        break
      default:
        break
    }
  })
}

// reducer
function reducer() {
  const questions = [{
    type: 'input',
    name: 'name',
    message: 'reducer (path with file name): ',
  }]

  inquirer.prompt(questions).then(function (answers) {
    try {
      fs.copySync(path.join(templateDir, `./reducer/reducer.js`), path.join(target, a.name), { overwrite: true });
      console.log(chalk.green(`Create reducer success：${path.join(target, a.name)}`))
    } catch (e) {
      console.log(chalk.red('Create reducer Failed!'))
    }
  })

}

// 生成容器
function container() {
  const questions = [{
    type: 'list',
    name: 'type',
    message: 'which type of container do you want to new ?',
    choices: [
      'normal',
      'full',
    ],
  }]
  inquirer.prompt(questions).then(function (answers) {
    const target = path.join(cwd, './src/containers')
    const q = [{
      type: 'input',
      name: 'name',
      message: 'container (path with file name): ',
    }]
    inquirer.prompt(q).then(function (a) {
      try {
        fs.copySync(path.join(templateDir, `./container/${answers.type}.js`), path.join(target, a.name), { overwrite: true });
        console.log(chalk.green(`Create container success：${path.join(target, a.name)}`))
      } catch (e) {
        console.log(chalk.red('Create container Failed!'))
      }
    })
  })
}

// 生成组件
function component() {
  const questions = [{
    type: 'list',
    name: 'type',
    message: 'which type of component do you want to new ?',
    choices: [
      'normal',
      'full',
      'stateless',
    ],
  }]
  inquirer.prompt(questions).then(function (answers) {
    const target = path.join(cwd, './src/components')
    const q = [{
      type: 'input',
      name: 'name',
      message: 'component (path with file name): ',
    }]
    inquirer.prompt(q).then(function (a) {
      try {
        fs.copySync(path.join(templateDir, `./component/${answers.type}.js`), path.join(target, a.name), { overwrite: true });
        console.log(chalk.green(`Create component success：${path.join(target, a.name)}`))
      } catch (e) {
        console.log(chalk.red('Create component Failed!'))
      }
    })
  })
}