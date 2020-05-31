const ConfigGenerator = require('./tasks/stylez.genconfig');
const HbsCompiler = require('./tasks/stylez.hbscompiler');

class StylezTasks{

    constructor(){

        this.configGenerator = ConfigGenerator;
        this.hbsCompiler = HbsCompiler;

    }

}

const instance = new StylezTasks();

module.exports = instance;