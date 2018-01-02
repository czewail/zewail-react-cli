#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const package = require('../package.json')

const newCli = require('../lib/new')

program.version(package.version)
  .option('new', 'new a zewail-react project.')
  .option('new --no-install', 'new a zewail-react project.')
  .option('n', 'new a zewail-react project.')
  .option('n --no-install', 'new a zewail-react project.')
  .parse(process.argv)


if (program.new || program.n) {
  newCli(process.argv)
}