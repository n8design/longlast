#!/usr/bin/env node

// core
const yargs = require('yargs');

// projects 
const project = require('./cmd/project');
const gulp = require('./cmd/gulp');

switch (yargs.argv._[0]) {
    case "new":
        project();    
        break;

    case "serve":
        gulp();    
        break;

    default:

        break;
}


