import axios from "axios";

const backdrop = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".modal-btn");
const form = document.querySelector(".modal-form");

const nameInput = document.querySelector("#user-name");
const phoneInput = document.querySelector("#user_phone");
const commentInput = document.querySelector("#user-comment");

const sendBtn = document.querySelector(".send-button");

const nameError = nameInput
  .closest(".modal-form-field")
  .querySelector(".error-message");

const phoneError = phoneInput
  .closest(".modal-form-field")
  .querySelector(".error-message");

const commentError = commentInput
  .closest(".modal-form-comment")
  .querySelector(".error-message");

let animalId = 2;

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
function showError(input, errorBlock, message = "Error text") {
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

// Перевірка валідності всіх полів
function updateSendButtonState() {
  const nameValid = nameInput.value.trim() !== '';
  const phoneValid = /^380\d{9}$/.test(phoneInput.value.trim());
  const commentValid = commentInput.value.trim() !== '';

  sendBtn.disabled = !(nameValid && phoneValid && commentValid);

  if (sendBtn.disabled) {
    sendBtn.classList.add("disabled");
  } else {
    sendBtn.classList.remove("disabled");
  }
}

// Валідація форми при сабміті
function validateForm() {
  let valid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, "Введіть ім'я");
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (!/^380\d{9}$/.test(phoneInput.value.trim())) {
    showError(phoneInput, phoneError, "Введіть 12-значний номер телефону, починаючи з 380");
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

// Валідація при вводі або blur
[nameInput, phoneInput, commentInput].forEach(input => {
  const errorBlock = input.closest(".modal-form-field, .modal-form-comment").querySelector(".error-message");

  input.addEventListener("blur", () => {
    if (input === phoneInput) {
      if (!/^380\d{9}$/.test(input.value.trim())) {
        showError(input, errorBlock, "Error text");
      }
    } else if (input.value.trim() === "") {
      showError(input, errorBlock, "Error text");
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

// Submit форми 
// form.addEventListener("submit", async event => {
//   event.preventDefault();

//   if (!validateForm()) return;

//   const payload = {
//     name: nameInput.value.trim(),
//     phone: phoneInput.value.trim(),
//     comment: commentInput.value.trim(),
//     animalId,
//   };

//   try {
//     await axios.post("https://furniture-store.b.goit.study/api/orders", payload, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     Swal.fire({
//       icon: "success",
//       title: "Успішно",
//       text: "Заявку відправлено",
//     });

//     closeModal();
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "Помилка",
//       text: "Не вдалося відправити заявку",
//     });
//   }
// });