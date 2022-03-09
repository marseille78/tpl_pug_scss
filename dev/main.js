document.addEventListener('DOMContentLoaded', function() {

  /**
   * Resize Browser Window
   */
  window.addEventListener('resize', () => {
    [].slice.call(document.querySelectorAll('.opened'))
      .forEach(el => {
        el.classList.remove('opened')
      });
  });

  /**
   * Toggle Mobile Menu
   */
  (function() {
    const example = document.querySelector('.example');

    if (!example) return;
    new Example(opt);
  })();
});