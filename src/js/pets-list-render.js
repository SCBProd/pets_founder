export function createMarkupCategoryList(arr) {
  return arr
    .map(item => {
      const categoryName = typeof item === 'string' ? item : item.name;
      const categoryId = item._id || '';

      return `
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${categoryName === 'Всі' ? 'pets-category-btn-active' : ''}" 
            type="button"
            data-category="${categoryName}"
            data-id="${categoryId}"
          >
            ${categoryName}
          </button>
        </li>
      `;
    })
    .join('');
}

export function createMarkupPetsList(arr) {
  return arr
    .map(
      ({ image, species, name, categories, age, gender, shortDescription }) => {
        const categoriesMarkup = categories
          .map(
            category => `<li class="pet-card-category">${category.name}</li>`
          )
          .join('');

        return `<li class="pet-card">
            <img class="pet-card-img" src="${image}" alt="${species}" />
            <div class="pet-description">
              <p class="pet-card-type">${species}</p>
              <h3 class="pet-card-name">${name}</h3>
              <ul class="pet-card-category-list">
                ${categoriesMarkup}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${age}</li>
                <li class="pet-card-gender">${gender}</li>
              </ul>
              <p class="pet-card-descr">
                ${shortDescription}
              </p>
            </div>
            <button class="pet-card-btn">Дізнатись більше</button>
          </li>`;
      }
    )
    .join('');
}
