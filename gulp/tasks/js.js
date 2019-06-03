'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const paths = require('../paths');

module.exports = gulp.task('js', () => {
  return gulp
    .src(paths.source.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js));
});
