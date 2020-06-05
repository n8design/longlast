const Generator = require('yeoman-generator');

const promptConfig = require('./promptConfig');

const commandExists = require('command-exists').sync;

class StylezGenerator extends Generator {

    constructor(args, opts) {

        super(args, opts);

        this.options['skip-install'];

    }

    // Initialisation generator
    initializing() {

        console.log('1. Init');

    }

    // Prompt for user input for Custom Generator
    async prompting() {

        const answers = await this.prompt(promptConfig);

        this.appname = answers.appname;

    }

    // adds additonal editor support in this case CSS Comb
    configuring() {
        // Currently not supported don't use this
        console.log('3. configure');
    }

    // adds additonal editor support in this case CSS Comb
    writing() {

        console.log("THIS APPNAME:::", this.appname);
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
            this.templatePath('.longlast.json'),
            this.destinationPath('.longlast.json')
        )

        this.fs.copy(
            this.templatePath('.csscomb.json'),
            this.destinationPath('.csscomb.json')
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
        /**
         * Place your custom deployment code in here
         */
        const hasYarn = commandExists('yarn');

        this.installDependencies({
            npm: !hasYarn,
            yarn: hasYarn,
            bower: false,
            skipMessage: this.options['skip-install-message']
        });
    }

    // Run installer normally time to say goodbye
    // If yarn is installed yarn will be used
    end() {
        // Currently not supported don't use this
        console.log('6. configure');
    }



}

module.exports = StylezGenerator;