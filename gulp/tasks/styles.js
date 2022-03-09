module.exports = () => {

  // Paths to libraries
  const libCSS = [
    // 'node_modules/bootstrap/dist/css/bootstrap-grid.css',
    // 'node_modules/select2/dist/css/select2.css'
    // 'node_modules/swiper/swiper-bundle.css'
  ];

  // Load Libraries
  $.gulp.task('styles:lib', () => {
    if (libCSS.length > 0) {
      return $.gulp.src(libCSS)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.gp.concat('libs.min.css'))
        .pipe($.gp.autoprefixer())
        .on("error", $.gp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "Error running Sass"
        }))
        .pipe($.gp.csso())
        .pipe($.gulp.dest(`${$.paths.app}/css`));
    }
  });

  $.gulp.task('styles', () => {
    return $.gulp.src(`${$.paths.dev}/main.scss`)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.sass().on('error', $.sass.logError))
      .pipe($.gp.autoprefixer())
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running Sass"
      }))
      .pipe($.gcmq())
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest(`${$.paths.app}/css`))
      .pipe($.bs.stream())
  });
};