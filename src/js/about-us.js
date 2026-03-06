import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import about1 from '../img/about1.jpg';
import about2 from '../img/about2.jpg';
import about3 from '../img/about3.jpg';
import about4 from '../img/about4.jpg';
import about5 from '../img/about5.jpg';

const aboutSwiperEl = document.querySelector('.js-about-swiper');

if (aboutSwiperEl) {
  const images = aboutSwiperEl.querySelectorAll('.about-card-img');
  const imgs = [about1, about2, about3, about4, about5];

  images.forEach((img, index) => {
    if (imgs[index]) {
      img.src = imgs[index];
    }
  });

  new Swiper('.js-about-swiper', {
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