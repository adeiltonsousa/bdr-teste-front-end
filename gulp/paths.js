'use strict';

module.exports = {
  source: {
    css: './src/css/**/*.css',
    js: './src/js/**/*.js',
    img: './src/img/**/*',
    files: {
      html: './src/index.html'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/css/**/*.css',
    js: './build/js/**/*.js',
    img: './build/img/**/*'
  },

  build: {
    html: './build/',
    css: './build/css',
    js: './build/js',
    img: './build/img'
  }
};
