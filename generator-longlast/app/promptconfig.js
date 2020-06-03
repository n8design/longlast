
const inquirer = require('inquirer');
const chalk = require('chalk');

const promptConfig = [
    {
        type: 'input',
        message: 'Name your project:',
        name: 'appname',
        default: this.appname
    }
]

module.exports = promptConfig;