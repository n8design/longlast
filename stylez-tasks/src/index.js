const ConfigGenerator = require('./tasks/stylez.genconfig.js');
const HbsCompiler = require('./tasks/stylez.hbscompiler.js');

class StylezTasks{

    constructor(){

        this.configGenerator = ConfigGenerator;
        this.hbsCompiler = HbsCompiler;

    }

}

const instance = new StylezTasks();

module.exports = instance;