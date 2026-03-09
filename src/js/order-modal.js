import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const backdrop = document.querySelector(".order-backdrop");
const modalCloseBtn = document.querySelector(".order-modal-btn");
const form = document.querySelector(".order-modal-form");
const takehomebtn = document.querySelector(".modal-pet-btn");
const sendBtn = document.querySelector(".send-button");
const nameInput = document.querySelector("#user-name");
const phoneInput = document.querySelector("#user_phone");
const commentInput = document.querySelector("#user-comment");


const nameError = nameInput
  .closest(".order-modal-form-field")
  .querySelector(".error-message");

const phoneError = phoneInput
  .closest(".order-modal-form-field")
  .querySelector(".error-message");

const commentError = commentInput
  .closest(".order-modal-form-comment")
  .querySelector(".error-message");

let animalId = 0;
// вiдкриття модалки

// function openModal(){
//   backdrop.classList.add("is-open");
//   document.body.classList.add("no-scroll");
// }



window.addEventListener('open-order-modal', event => {
  const petId = event?.detail?.petId;

  if (!petId) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося визначити тварину для заявки',
      position: 'topRight',
    });
    return;
  }

  animalId = petId;
  openModal();
});

// takehomebtn.addEventListener("click",openModal);

// закриття модалки
function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.classList.remove("no-scroll");

  form.reset();

  clearError(nameInput, nameError);
  clearError(phoneInput, phoneError);
  clearError(commentInput, commentError);

  updateSendButtonState();
}


// кнопка X
modalCloseBtn.addEventListener("click", closeModal);


// клік поза модалкою
backdrop.addEventListener("click", e => {
  if (e.target === backdrop) {
    closeModal();
  }
});


// Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});


// показати помилку
function showError(input, errorBlock, message = "Error") {
  input.classList.add("error");
  errorBlock.textContent = message;
}


// очистити помилку
function clearError(input, errorBlock) {
  input.classList.remove("error");
  errorBlock.textContent = "";
}


// Дефолтно кнопка заблокована
sendBtn.disabled = true;
sendBtn.classList.add("disabled");


// перевірка стану кнопки
function updateSendButtonState() {
  const nameValid = nameInput.value.trim() !== "";
  const phoneValid = /^380\d{9}$/.test(phoneInput.value.trim());
  const commentValid = commentInput.value.trim() !== "";

  sendBtn.disabled = !(nameValid && phoneValid && commentValid);

  if (sendBtn.disabled) {
    sendBtn.classList.add("disabled");
  } else {
    sendBtn.classList.remove("disabled");
  }
}


// валідація форми
function validateForm() {
  let valid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, "Введіть ім'я");
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (!/^380\d{9}$/.test(phoneInput.value.trim())) {
    showError(
      phoneInput,
      phoneError,
      "Введіть 12-значний номер телефону, починаючи з 380"
    );
    valid = false;
  } else {
    clearError(phoneInput, phoneError);
  }

  if (!commentInput.value.trim()) {
    showError(commentInput, commentError, "Введіть коментар");
    valid = false;
  } else {
    clearError(commentInput, commentError);
  }

  updateSendButtonState();

  return valid;
}


// валідація при вводі
[nameInput, phoneInput, commentInput].forEach(input => {
  const errorBlock = input
    .closest(".order-modal-form-field, .order-modal-form-comment")
    .querySelector(".error-message");

  input.addEventListener("blur", () => {
    if (input === phoneInput) {
      if (!/^380\d{9}$/.test(input.value.trim())) {
        showError(input, errorBlock, "Невірний формат телефону");
      }
    } else if (input.value.trim() === "") {
      showError(input, errorBlock, "Поле обов'язкове");
    } else {
      clearError(input, errorBlock);
    }

    updateSendButtonState();
  });

  input.addEventListener("input", () => {
    clearError(input, errorBlock);
    updateSendButtonState();
  });
});


// SUBMIT ФОРМИ
form.addEventListener("submit", async event => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }


const { name, phone, comment } = form.elements;


  const payload = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    comment: comment.value.trim(),
    animalId: animalId,
  };

  try {
    
    const res = await axios.post('https://paw-hut.b.goit.study/api/orders',payload);

      const orderdata = res.data

    iziToast.success({
      title: "Успішно",
      message: "Заявку відправлено",
      position: "topRight",
    });
    
    closeModal();
  } catch (error) {
    iziToast.error({
      title: "Помилка",
      message: "Не вдалося відправити заявку",
      position: "topRight",
    });
  }
});