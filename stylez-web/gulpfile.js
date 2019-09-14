// Import `src` and `dest` from gulp for use in the task.
const {
    src,
    dest,
    watch,
    series
} = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');
const server = browserSync.create();

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;

const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const genconfig = require('stylez-tasks');

console.log(genconfig);


// Import Gulp plugins.
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

const serve = (cb) => {

    server.init({
        notify: false,
        server: {
            baseDir: '.tmp/web/',
            directory: true
        }
    });

    watch(['src/web/**/*.scss'], styles);
    watch(['src/web/**/*.js'], scripts);
    watch([
            'src/web/**/*.html',
            'src/images/**/*'
        ], html)
        .on('change', server.reload);

    watch(['src/app/patterns/**/*.hbs'])
        .on('add', genconfig.added)
        .on('change', genconfig.changed)
        .on('unlink', genconfig.deleted)

    cb();

};

const styles = () => {
    return src('src/**/*.scss')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer()
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write()))
        .pipe(dest('.tmp/'))
        .pipe(server.reload({
            stream: true
        }));
};

const scripts = () => {
    return src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.babel())
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest('.tmp'))
        .pipe(server.reload({
            stream: true
        }));
}

const html = () => {
    return src('src/web/**/*.html')
        .pipe(dest('.tmp/web'));
}

exports.serve = series(html, styles, scripts, serve);