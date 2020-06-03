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

let outfolder = '.tmp/'

if(process.argv.indexOf('--dist')){
    outfolder = 'dist/';
}

const {
    configGenerator,
    hbsCompiler
} = require('stylez-tasks');

const serve = (cb) => {

    server.init({
        notify: false,
        server: {
            baseDir: ''+outfolder+'web/',
            directory: true,
            routes: {
                '/config/': './config/',
                '/node_modules': 'node_modules'
            },
            https: true
        },
        open: false // remove if browser should open
    });

    watch(['src/web/**/*.scss'], styles);
    watch(['src/web/**/*.js'], series(scripts, webpack));
    watch([
            'src/web/**/*.html',
            'src/images/**/*'
        ], html)
        .on('change', server.reload);

    watch(['src/app/patterns/**/*.hbs'])
        .on('add', (path) => {
            configGenerator.added(path);
            compileTemplates().then(() => {
                server.reload();
            })

        })
        .on('change', (path) => {
            configGenerator.changed(path);
            compileTemplates().then(() => {
                server.reload();
            })
        })
        .on('unlink', (path) => {
            configGenerator.deleted(path);
            compileTemplates().then(() => {
                server.reload();
            })
        });

    cb();

};

const compileTemplates = async () => {
    return await hbsCompiler.compile('src/app/patterns/**/*.hbs', './'+outfolder+'web/scripts/');
}

const webpack = () => {

    return src('lib/**/*.js')
        .pipe($.plumber())
        .pipe(
            webpackStream(require('./webpack.config.js')))
        .pipe(dest(''+outfolder+'web/scripts'));

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
        .pipe(dest(''+outfolder+''))
        .pipe(server.reload({
            stream: true
        }));
};

const scripts = (cb) => {

    return src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.babel())
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest('./lib/'))
        .pipe(server.reload({
            stream: true
        }));

}

const html = () => {
    return src('src/web/**/*.html')
        .pipe(dest(''+outfolder+'web'));
}

configGenerator.startupCheck();

exports.serve = series(html, styles, scripts, compileTemplates, serve);
exports.build = series(html, styles, scripts, webpack);
exports.buildDebug = series(html, styles, scripts, compileTemplates, webpack);
exports.default = serve;