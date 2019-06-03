'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const paths = require('../paths');

module.exports = gulp.task('imagemin', () => {
  return gulp
    .src(paths.source.img)
    .pipe(plumber())
    .pipe(
      cache(
        imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        })
      )
    )
    .pipe(gulp.dest(paths.build.img));
});
