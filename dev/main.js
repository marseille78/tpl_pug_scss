document.addEventListener("DOMContentLoaded", function () {
  /**
   * Resize Browser Window
   */

  window.addEventListener("resize", () => {
    document.querySelectorAll(".opened").forEach((el) => {
      el.classList.remove("opened");
    });
  });
});
