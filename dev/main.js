document.addEventListener("DOMContentLoaded", function () {
  /**
   * Resize Browser Window
   */

  window.addEventListener("resize", () => {
    document.querySelectorAll(".opened").forEach((el) => {
      el.classList.remove("opened");
    });
  });

  /**
   * Swiper
   */
  (function() {
    const swiperSelector = "[data-swiper]";
    const swiper = document.querySelector(swiperSelector);

    const opts = {
      // Стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Навигация
      // Буллеты, текущее положение, прогрессбар
      pagination: {
        el: '.swiper-pagination',

        /* Буллеты */
        // clickable: true,

        /* Динамические буллеты (Изменяют размер в зависимости от того, на сколько далеко они от активного слайда) */
        // dynamicBullets: true,

        /* Кастомные буллеты */
        // className - стандартный класс буллета
        // renderBullet: (index, className) => {
        //   return `<span class="${className}">${index + 1}</span>`;
        // },

        /* Фракция (Текущая страница слайдера из общего числа) / default: bullet */
        type: 'fraction',

        /* Кастомный вывод фрацкии */
        renderFraction: (currentClass, totalClass) => {
          return `Фото <span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
        },
      },
    };

    if (swiper) {
      createSwiper(swiperSelector, opts);
    }
  })();
});

// 10:35