const {
    spawn
} = require('child_process');
const fs = require('fs');
const yargs = require('yargs');
const log = global.log || require('../../lib/logger');

const _convertToCmdArgs = (args) => {

    return [];

}

const caller = (args) => {

}



class Project {

    constructor() {

        log(':: Process');
        log('yargs', yargs);

        this.args = yargs.argv._

        this.execute();

    }

    usage() {

        console.log(' This your project usage ----');

    }

    execute() {

        if (this.args.length < 2) {

            this.usage();
            return;

        }
        
        if(fs.existsSync('.yo-rc.json')){

            console.log('This folder already contains a project. Pick another.')
            return;
        }

        const appName = `--appname=${this.args[0]}`;

        try {

            return spawn('yo',
                ['longlast', appName], {
                    stdio: 'inherit'
                });

        } catch (error) {

            console.log(error);

        }


    }

}

module.exports = new Project();