const {
    spawn
} = require('child_process');

const _convertToCmdArgs = (args) => {

    return [];

}

const caller = (args) => {

}

const run = (options) => {

    return spawn('yo', ['stylez'], {
        stdio: 'inherit'
    });

}

module.exports = run;