// core
const yargs = require('yargs');

// // projects 
// const project = require('./cmd/project');
// const gulp = require('./cmd/gulp');

// switch (yargs.argv._[0]) {
//     case "new":
//         project();
//         break;

//     case "serve":
//         gulp();
//         break;

//     default:

//         break;
// }


class Caller {

    constructor() {

        console.log('YARGS',
            yargs.argv,
            yargs.argv._[0])

        this.execute();
    }

    execute() {

        switch (yargs.argv._[0]) {

            case 'new':
                require('../cmd/project');
                break;

            case 'serve':
                console.log('serve');
                require('../cmd/gulp');
                break;

        }

    }

}

module.exports = new Caller();