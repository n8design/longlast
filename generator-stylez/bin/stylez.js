#!/usr/bin/env node

const { spawn } = require('child_process');
const run = spawn('yo', ['stylez'], {
    stdio: 'inherit'
});

// const generator = require('../app/index');
// const myGenerator = new generator();
// myGenerator.initializing();

