const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: true })
        .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: 'JS',
            message: error.message
        })),
        }))
        .pipe($.gp.concat('main.js'))
        .pipe($.gp.babel())
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: true }))
        // .pipe($.gp.uglify())
        // .pipe($.gp.rename({ suffix: '.min' }))
        // .pipe($.gulp.dest($.path.js.dest))
        .pipe($.browserSync.stream());
};

module.exports = js;