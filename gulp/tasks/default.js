'use strict';

const gulp = require('gulp');

module.exports = gulp.task('default', [
  'html',
  'css',
  'js',
  'imagemin',
  'watch',
  'browser-sync'
]);
