const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('open');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const stylish = require('gulp-jscs-stylish');
const uglify = require('gulp-uglify');
const pump = require('pump');
const rename = require('gulp-rename');

gulp.task('connect', function () {
    // runs connect server
    connect.server({
        root: ""
    });
});

gulp.task('open', function () {
    // open browser
    var uri = 'http://localhost:8080/test/test.html';
    open(uri);
});

gulp.task('checkcode', function () {
    // validate source code using jscs and jshint
    gulp.src('.')
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function () { })
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', function (cb) {
    pump([
        gulp.src('src/*.js'),
        uglify({
            preserveComments: 'license'
        }),
        rename('animate.min.js'),
        gulp.dest('dist')
    ],
        cb
    );
});