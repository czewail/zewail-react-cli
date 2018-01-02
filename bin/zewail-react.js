#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const package = require('../package.json')

program.version(package.version)
    .option('new', 'new a zewail-react project')
    .option('n', 'new a zewail-react project')
