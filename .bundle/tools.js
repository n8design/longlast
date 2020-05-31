const path = require('path');
const fs = require('fs');

const copyDir = (src, dest) => {

    const files = fs.readdirSync(src);

    if(!fs.existsSync(dest)){
        fs.mkdirSync(dest);
    }

    for (var i = 0; i < files.length; i++) {

        var current = fs.lstatSync(path.join(src, files[i]));
        if (current.isDirectory()) {
            copyDir(path.join(src, files[i]), path.join(dest, files[i]));
        } else if (current.isSymbolicLink()) {
            var symlink = fs.readlinkSync(path.join(src, files[i]));
            fs.symlinkSync(symlink, path.join(dest, files[i]));
        } else {
            fs.copyFileSync(path.join(src, files[i]), path.join(dest, files[i]));
        }
    }
}

module.exports = {
    copyDir: copyDir
}