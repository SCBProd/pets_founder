import { getCategories, getPets } from './pets-list-api';
import {
  createMarkupCategoryList,
  createMarkupPetsList,
} from './pets-list-render';

const categoryList = document.querySelector('.pets-category');
const petsList = document.querySelector('.pets-list');
const loadMoreBtn = document.querySelector('.add-more-cards-btn');

let page = 1;
let currentCategoryId = null;

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
    //визначення параметра limit для різних екранів
    let limit = window.innerWidth >= 1440 ? 9 : 8;

    const petsListResponse = await getPets(page, limit, currentCategoryId);
    const markup = createMarkupPetsList(petsListResponse.animals);

    if (page === 1) {
      petsList.innerHTML = '';
    }
    petsList.insertAdjacentHTML('beforeend', markup);

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
