const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', function () {
    // runs connect server
    connect.server({
        root: ""
    });
});

gulp.task('open', function () {
    // open browser
    var uri = 'http://localhost:8080/index.html';
    open(uri);
});