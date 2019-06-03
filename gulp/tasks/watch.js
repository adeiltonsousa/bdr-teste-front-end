'use strict';

const gulp = require('gulp');
const paths = require('../paths');

module.exports = gulp.task('watch', () => {
  gulp.watch(paths.source.files.html, ['html']);
  gulp.watch(paths.source.css, ['css']);
  gulp.watch(paths.source.js, ['js']);
  gulp.watch(paths.source.img, ['imagemin']);
});
