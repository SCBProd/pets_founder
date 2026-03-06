import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { fetchStories } from './success-stories-api';
import { displayStories } from './success-stories-render';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loaderEl = document.querySelector('.loader-element');
const controlsEl = document.querySelector('.happy-tails-section .swiper-controls');

function showErrorMsg(message) {
    iziToast.info({
        message,
        position: 'topRight',
        color: '#f2aaaaff',
        icon: false,
        progressBar: false,
        messageColor: 'black',
    });
}

function showLoader() { loaderEl.classList.add('loader'); }
function hideLoader() { loaderEl.classList.remove('loader'); }
function hideControls() { controlsEl.classList.add('visually-hidden'); }
function showControls() { controlsEl.classList.remove('visually-hidden'); }

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const stories = await fetchStories();

        if (!stories) {
            showErrorMsg('Не вдалося завантажити історії. Спробуйте пізніше');
            hideLoader();
            document.querySelector('.happy-tails-section .swiper-wrapper').innerHTML =
                '<p class="error-message">Не вдалося завантажити історії</p>';
            return;
        }

        if (stories.length === 0) {
            showErrorMsg('На жаль, історії зараз відсутні');
            hideLoader();
            document.querySelector('.happy-tails-section .swiper-wrapper').innerHTML =
                '<p class="error-message">На жаль, історії зараз відсутні</p>';
            return;
        }

        displayStories(stories);

        new Swiper('.happy-tails-section .swiper-wrapper-container', {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            spaceBetween: 32,
            pagination: {
                el: '.happy-tails-section .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.happy-tails-section .swiper-button-next',
                prevEl: '.happy-tails-section .swiper-button-prev',
            },
            breakpoints: {
                768: { slidesPerView: 2 },
            },
        });

        showControls();
        hideLoader();
    } catch (err) {
        showErrorMsg('Сталася помилка. Спробуйте пізніше');
        document.querySelector('.happy-tails-section .swiper-wrapper').innerHTML =
            '<p class="error-message">На жаль, історії зараз відсутні</p>';
        hideLoader();
    }
});