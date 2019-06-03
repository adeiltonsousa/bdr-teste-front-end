'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');
const paths = require('../paths');

module.exports = gulp.task('html', () => {
  return gulp
    .src(paths.source.files.html)
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.build.html));
});
