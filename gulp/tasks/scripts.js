module.exports = () => {
  let libJS = [
    // 'node_modules/bootstrap/dist/js/bootstrap.js',
    // 'node_modules/jquery/dist/jquery.js'
    // 'node_modules/swiper/swiper-bundle.js'
  ];

  $.gulp.task('scripts:lib', () => {
    if (libJS.length > 0) {
      return $.gulp.src(libJS)
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gp.uglify())
        .pipe($.gulp.dest(`${$.paths.app}/js`))
        .pipe($.bs.stream());
    }
    return true;
  });

  $.gulp.task('scripts', () => {
    return $.gulp.src(`${$.paths.dev}/**/*.js`)
      .pipe($.gp.plumber())
      .pipe($.gp.concat('main.js'))
      .pipe($.gp.babel({
        presets: ['@babel/preset-env']
      }))
      .pipe($.gulp.dest(`${$.paths.app}/js`))
      .pipe($.bs.stream());
  });
};