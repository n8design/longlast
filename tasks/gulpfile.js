// Import `src` and `dest` from gulp for use in the task.
const {
    src,
    dest,
    watch,
    series
} = require('gulp');

const eslint = require('gulp-eslint');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;

const dev = (cb) => {

    watch(['src/**/*.js'], lint);

    cb();

};

const lint = () => {
    return src('src/**/*.js')
        .pipe($.eslint({
            'rules': {
                'quotes': [1, 'single'],
                'semi': [1, 'always']
            },
            envs: [
                'node'
            ]
        }))
        .pipe(eslint.format())
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest('lib'));
}

exports.default = series(dev, lint);