'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const paths = require('../paths');

module.exports = gulp.task('css', () => {
  return gulp
    .src(paths.source.css)
    .pipe(plumber())
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.build.css));
});
