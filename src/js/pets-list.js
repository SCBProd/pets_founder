import { getCategories, getPets } from './pets-list-api';
import {
  createMarkupCategoryList,
  createMarkupPetsList,
  createMarkupAnimalDetails,
} from './pets-list-render';

const categoryList = document.querySelector('.pets-category');
const petsList = document.querySelector('.pets-list');
const loadMoreBtn = document.querySelector('.add-more-cards-btn');
const backdrop = document.querySelector('.backdrop');
const modalContainer = document.querySelector('.modal-details');
// const openOrderModal = document.querySelector('.pet-details-btn');

let page = 1;
let currentCategoryId = null;
let cachedPets = [];

async function renderCategory() {
  try {
    const categories = await getCategories();
    categoryList.innerHTML = createMarkupCategoryList(categories);
  } catch (error) {
    console.log(error);
  }
}
renderCategory();
//

async function renderPetsList() {
  try {
    let limit = window.innerWidth >= 1440 ? 9 : 8;

    const petsListResponse = await getPets(page, limit, currentCategoryId);

    // кешуємо тварин
    if (page === 1) {
      cachedPets = petsListResponse.animals;
      petsList.innerHTML = '';
    } else {
      cachedPets = [...cachedPets, ...petsListResponse.animals];
    }

    // рендер поточної сторінки
    const markup = createMarkupPetsList(petsListResponse.animals);
    petsList.insertAdjacentHTML('beforeend', markup);

    // кнопка load more
    if (petsListResponse.totalItems <= page * limit) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.log(error);
  }
}
renderPetsList();

//
categoryList.addEventListener('click', async event => {
  if (!event.target.classList.contains('pets-category-btn')) return;
  currentCategoryId = event.target.dataset.id;

  page = 1;
  //підсвітка вибраної категорії
  let btn = event.target;
  categoryList
    .querySelector('.pets-category-btn-active')
    .classList.remove('pets-category-btn-active');
  btn.classList.add('pets-category-btn-active');

  petsList.innerHTML = '';

  loadMoreBtn.style.display = 'block';
  await renderPetsList();
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  await renderPetsList();
});

petsList.addEventListener('click', onPetClick);
async function onPetClick(event) {
  const btn = event.target.closest('.pet-card-btn');
  if (!btn) {
    return;
  }
  const id = btn.dataset.id;
  const pet = cachedPets.find(pet => pet._id === id);

  if (!pet) return;
  modalContainer.innerHTML = createMarkupAnimalDetails(pet);

  const modalBtnClose = document.querySelector('.modal-details-btn');
  modalBtnClose.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

backdrop.addEventListener('click', event => {
  // закриваємо лише при кліку на фон
  if (event.target === backdrop) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

const orderBackdrop = document.querySelector('.order-backdrop');

document.addEventListener('click', e => {
  if (e.target.classList.contains('pet-details-btn')) {
    orderBackdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }
});
