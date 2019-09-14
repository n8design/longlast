// const fs = require('fs');
const path = require('path');
const fs = require('fs');

const configPath = path.resolve('./src/app/config/stylez.json');

const patternItem = {
    title: '',
    name: '',
    file: '',
    category: ''
};

const defaultConfig = {
    patterns: []
};

const loadConfig = () => {

    const config = configPath;

    if (fs.existsSync(config)) {

        let fileContent = fs.readFileSync(config, 'utf-8');

        try {

            let fileJson = JSON.parse(fileContent);

            return fileJson;

        } catch (error) {

            console.log(error);

        }

    } else {

        return defaultConfig;

    }

};

const saveConfig = (newConfig) => {

    const config = configPath;

    try {

        const newConfigContent = JSON.stringify(newConfig, null, 4);

        fs.writeFileSync(config, newConfigContent, 'UTF-8');

    } catch (error) {

        console.log(error);

    }

};

const showStats = () => {
    console.log(this);
};

class Genconfig {

    static changed(affectedFile) {

        let curConfig = loadConfig();

        let exists = curConfig.patterns.filter(item => {

            return item.file === affectedFile;

        });

        if (exists.length === null) {

            let filename = path.basename(affectedFile);

            // Getting Path Trail
            let dirTrail = path.dirname(affectedFile).split(path.sep);

            // File Extension
            let extension = path.extname(affectedFile);

            // create new Pattern Item
            let curPatternItem = patternItem;

            // define new values for pattern
            curPatternItem.file = affectedFile;
            curPatternItem.category = dirTrail.pop();
            curPatternItem.title = filename.split(extension).shift();
            curPatternItem.name = filename;


            curConfig.patterns.push(curPatternItem);

            saveConfig(curConfig);

            showStats(curConfig);

        } else {

            console.log('Changed Show Stats');
            showStats(curConfig);

        }

    }

    static added(affectedFile) {

        let curConfig = loadConfig();
        console.log('ADded', affectedFile);

        showStats(curConfig);
    }

    static deleted(affectedFile) {
        let curConfig = loadConfig();
        console.log('DELETED ::::', affectedFile);

        showStats(curConfig);

    }

}

module.exports = Genconfig;
//# sourceMappingURL=stylez.genconfig.js.map
