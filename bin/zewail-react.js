#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const package = require('../package.json')

const initCli = require('../lib/init')
const newCli = require('../lib/new')

program.version(package.version)
  .option('init', 'init a zewail-react project.')
  .option('init --no-install', 'init a zewail-react project.')
  .option('i', 'init a zewail-react project.')
  .option('i --no-install', 'init a zewail-react project.')
  .option('new', 'new a module')
  .option('n', 'new a module')
  .parse(process.argv)


if (program.init || program.i) {
  initCli(process.argv)
}

if (program.new || program.n) {
  newCli(process.argv)
}