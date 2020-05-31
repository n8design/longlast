const fs = require('fs');
const path = require('path');
const {
    copyDir
} = require('./tools');
const {
    spawnSync
} = require('child_process');

const outDir = '../generator-stylez/lib/'

process.chdir('web/')

console.log('Compile Web Build Start');
spawnSync('gulp', ['build']);
console.log('Compile Web Build Finished');

copyDir(
    path.join(
        process.cwd(),
        'dist/'
    ),
    path.join(
        process.cwd(),
        outDir
    )
);

process.chdir('../tasks/');

console.log('Compile Task Start');
spawnSync('gulp', ['build']);
console.log('Compile Task Finished');

copyDir(
    path.join(
        process.cwd(),
        'lib/'
    ),
    path.join(
        process.cwd(),
        outDir
    )
);