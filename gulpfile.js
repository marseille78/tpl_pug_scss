"use strict";

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  sp: require('gulp.spritesmith'),
  gcmq: require('gulp-group-css-media-queries'),
  sass: require('gulp-sass')(require('sass')),
  paths: {
    tasks: require('./gulp/config/tasks'),
    dev: './dev',
    app: './app'
  }
};

$.paths.tasks.forEach((itemTask) => {
  require(itemTask)();
});

// Default
$.gulp.task('default', $.gulp.series(
  'scripts',
  $.gulp.parallel('pug', 'styles'),
  $.gulp.parallel('serve', 'watch')
));