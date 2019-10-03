'use strict';

const gulp = require('gulp');
const gs = require('glob-stream');
const chalk = require('chalk');
const plumber = require('gulp-plumber');
const path = require('path');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');
const merge = require('merge-stream');

const hbsCompiler = (src, dest, namespace) => {

    let callDir = process.cwd();

    let hbOptions = {
        handlebars: require('handlebars')
    };

    // let config = require(process.cwd() + '/ssg.core.config');

    // partials stream
    let partials = gulp.src(src)
        .pipe(plumber())
        // handlebars
        .pipe(handlebars(hbOptions))
        // wrap inline javascript
        .pipe(wrap('Handlebars.registerPartial(<%= imports.processPartialName(file.relative) %>,' +
            'Handlebars.template(<%= contents %>));', {}, {
                imports: {
                    processPartialName: function (fileName) {
                        let patternName = path.basename(fileName, '.js');
                        if (patternName.indexOf("_") === 0) {
                            patternName = patternName.substr(1);
                        }
                        return JSON.stringify(patternName);
                    }
                }
            }));

    // template stream
    let templates = gulp.src(src)
        .pipe(plumber())
        // handlebars
        .pipe(handlebars(hbOptions))
        // wrap
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        // namespace
        .pipe(declare({
            namespace: namespace,
            noRedeclare: true
        }));

    // return merge
    return merge(partials, templates)
        // concat
        .pipe(concat(namespace + '.js'))
        // build
        .pipe(gulp.dest(dest));

};

module.exports = hbsCompiler;