#!/usr/bin/env node

// projects 
const project = require('./cmd/project');
const gulp = require('./cmd/gulp');


if(process.argv[0] === "project"){
    project();
}
if(process.argv[0] === "serve "){
    gulp();
}



