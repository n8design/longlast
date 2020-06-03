const {
    spawn
} = require('child_process');

const _convertToCmdArgs = (args) => {

    return [];

}

const caller = (args) => {

}

const run = (options) => {

    return spawn('yo', ['longlast'], {
        stdio: 'inherit'
    });

}

module.exports = run;