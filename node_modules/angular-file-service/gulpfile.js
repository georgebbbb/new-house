var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

gulp.task('build', function () {
    browserify({
        entries: ['./angular-file-service.js']
    }).bundle()
    .pipe(source('angular-file-service.js'))
    .pipe(gulp.dest('dist'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
        .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});
