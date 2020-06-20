const {
    spawn
} = require('child_process');

const _convertToCmdArgs = (args) => {

    return [];

}

const caller = (args) => {

}

const run = (options) => {

    return spawn('gulp', ['serve'], {
        stdio: 'inherit'
    });

}

run();

module.exports = run;