import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import about1 from '../img/about1.jpg';
// import about2 from '../img/about2.jpg';
// import about3 from '../img/about3.jpg';
// import about4 from '../img/about4.jpg';
// import about5 from '../img/about5.jpg';

const aboutSwiperEl = document.querySelector('.js-about-swiper');

// if (aboutSwiperEl) {
//   const images = aboutSwiperEl.querySelectorAll('.about-slide-img');
//   const imgs = [about1, about2, about3, about4, about5];

//   images.forEach((img, index) => {
//     if (imgs[index]) {
//       img.src = imgs[index];
//     }
//   });

  new Swiper('.js-about-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: false,
    grabCursor: true,

    navigation: {
      nextEl: '.about-swiper-next',
      prevEl: '.about-swiper-prev',
      disabledClass: 'is-disabled',
    },

    pagination: {
      el: '.about-swiper-pagination',
      clickable: true,
    },
  });
// }