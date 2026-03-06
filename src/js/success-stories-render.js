import Raty from 'raty-js';
import 'raty-js/src/raty.css';

export function displayStories(stories) {
    const container = document.querySelector('.happy-tails-section .swiper-wrapper');

    const html = stories.map(({ description, rate, author }) => `
        <div class="swiper-slide">
            <div class="star-rating" data-score="${rate}"></div>
            <p class="swiper-slide-content">${description}</p>
            <p class="swiper-slide-author">${author}</p>
        </div>
    `).join('');

    container.insertAdjacentHTML('beforeend', html);

    container.querySelectorAll('.star-rating').forEach(el => {
        const raty = new Raty(el, { starType: 'svg', readOnly: true });
        raty.init();
    });
}