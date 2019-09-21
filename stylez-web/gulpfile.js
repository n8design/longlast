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

const webpackStream = require('webpack-stream');

const {
    configGenerator,
    hbsCompiler
} = require('stylez-tasks');

// Import Gulp plugins.
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

const serve = (cb) => {

    server.init({
        notify: false,
        server: {
            baseDir: '.tmp/web/',
            directory: true,
            routes: {
                '/app': './src/app/',
                '/node_modules': 'node_modules'
            },
            https: true
        },
        open: false // remove if browser should open
    });

    watch(['src/web/**/*.scss'], styles);
    watch(['src/web/**/*.js'], scripts);
    watch([
            'src/web/**/*.html',
            'src/images/**/*'
        ], html)
        .on('change', server.reload);

    watch(['src/app/patterns/**/*.hbs'])
        .on('add', (path) => {
            configGenerator.added(path);
            hbsCompiler.compile('src/app/patterns/**/*.hbs', './.tmp/web/scicpts/');
            server.reload();
        })
        .on('change', (path) => {
            configGenerator.changed(path);
            hbsCompiler.compile('src/app/patterns/**/*.hbs', './.tmp/web/scripts/');
            server.reload();
        })
        .on('unlink', (path) => {
            configGenerator.deleted(path);
            hbsCompiler.compile('src/app/patterns/**/*.hbs', './.tmp/web/scripts/');
            server.reload();
        });

    cb();

};

const webpack = () => {

    return src('build/')
        .pipe(
            webpackStream(require('./webpack.config.js')))
        .pipe(dest('.tmp/web/scripts'));

}

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
        // .pipe($.babel())
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest('.tmp/'))
        .pipe(server.reload({
            stream: true
        }));
}

const html = () => {
    return src('src/web/**/*.html')
        .pipe(dest('.tmp/web'));
}

configGenerator.statupCheck();

exports.serve = series(html, styles, scripts, serve);
exports.default = serve;