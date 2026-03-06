import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutSwiperEl = document.querySelector('.js-about-swiper');

if (aboutSwiperEl) {
  new Swiper(aboutSwiperEl, {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: false,
    grabCursor: true,

    navigation: {
      nextEl: '.about-nav-btn-next',
      prevEl: '.about-nav-btn-prev',
      disabledClass: 'is-disabled',
    },

    pagination: {
      el: '.about-pagination',
      clickable: true,
      bulletClass: 'about-pagination-bullet',
      bulletActiveClass: 'is-active',
      renderBullet(index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти до слайду ${index + 1}"></button>`;
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}