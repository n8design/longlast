const ConfigGenerator = require('./tasks/stylez.genconfig');
const HbsCompiler = require('./tasks/stylez.hbscompiler');
const MarkDown = require('./tasks/stylez.markdown');

class StylezTasks{

    constructor(){

        this.configGenerator = ConfigGenerator;
        this.hbsCompiler = HbsCompiler;
        this.markDown = MarkDown;

    }

}

const instance = new StylezTasks();

module.exports = instance;