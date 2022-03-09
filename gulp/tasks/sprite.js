module.exports = () => {
  $.gulp.task('sprite', function(done) {
    const spriteData = $.gulp.src(`${$.paths.dev}/img/icons/*.png`)
      .pipe($.sp({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 1
      }));
    spriteData.img.pipe($.gulp.dest(`${$.paths.app}/img`)); // Path to save image
    spriteData.css.pipe($.gulp.dest(`${$.paths.dev}/base`)); // Path to save styles
    done();
  });
};