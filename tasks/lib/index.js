const path = require('path');
const ConfigGenerator = require('./tasks/stylez.genconfig');
const HbsCompiler = require('./tasks/stylez.hbscompiler');

console.log(__dirname);

class StylezTasks{

    constructor(){

        this.configGenerator = ConfigGenerator;
        this.hbsCompiler = HbsCompiler;
        this.webbase = path.join(__dirname, '../web/');

        console.log('this.webbase', this.webbase)

    }

}

const instance = new StylezTasks();

module.exports = instance;
//# sourceMappingURL=index.js.map
