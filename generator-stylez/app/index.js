const Generator = require('yeoman-generator');
const StylezSay = require('../lib/tools/stylezsay');

const promptConfig = require('./promptConfig');

class StylezGenerator extends Generator {

    constructor(args, opts) {

        super(args, opts);

        this.option('projectname');

    }

    // Initialisation generator
    initializing() {

        StylezSay();
        console.log('1. Init');

    }

    // Prompt for user input for Custom Generator
    async prompting() {

        const answers = await this.prompt(promptConfig);

    }

    // adds additonal editor support in this case CSS Comb
    configuring() {
        // Currently not supported don't use this
        console.log('3. configure');
    }

    // adds additonal editor support in this case CSS Comb
    writing() {

        this.appname
        // Currently not supported don't use this
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                title: this.appname
            }
        )

        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        )

        this.fs.copy(
            this.templatePath('.stylez.json'),
            this.destinationPath('.stylez.json')
        )

        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        )

        this.fs.copy(
            this.templatePath('src/images'),
            this.destinationPath('src/images')
        )
        this.fs.copy(
            this.templatePath('src/patterns'),
            this.destinationPath('src/patterns')
        )

        this.fs.copy(
            this.templatePath('config'),
            this.destinationPath('config')
        )
    }

    // adds additonal editor support in this case CSS Comb
    install() {
        console.log('5. configure');
        /**
         * Place your custom deployment code in here
         */

    }

    // Run installer normally time to say goodbye
    // If yarn is installed yarn will be used
    end() {
        // Currently not supported don't use this
        console.log('6. configure');
    }



}

module.exports = StylezGenerator;