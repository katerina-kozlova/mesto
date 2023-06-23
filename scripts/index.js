const openPopupButtons = document.querySelectorAll(".button__open"); // Кнопка открытия попапа в DOM
const closePopupButtons = document.querySelectorAll(".popup__close-button"); // Кнопка закрытия попапа в DOM
const savePopupButtons = document.querySelectorAll(".popup__save-button"); // Кнопка сохранения информации в DOM
const popupsElement = document.querySelectorAll(".popup"); // Попапы в DOM
let formElement = document.querySelector(".popup__form"); // Находим форму в DOM
// Находим поля формы редактирования в DOM:
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#description");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
// Находим поля формы добавления в DOM:
let titleInput = formElement.querySelector("#title");
let linkInput = formElement.querySelector("#link");
let cardsTitle = document.querySelector(".cards__title");
let cardsImage = document.querySelector(".cards__image");

// Функция, которая открывает необходимый попап в зависимости от того, на какую кнопку пользоваться кликнул
function openPopup() {
    let index = Array.from(openPopupButtons).indexOf(this);
    popupsElement[index].classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
// Перебираем из массива кнопки открытия попапа и подключаем функцию, описанную выше
openPopupButtons.forEach((button) => {
    button.addEventListener('click', openPopup);
    })

function closePopup() {
    let index = Array.from(closePopupButtons).indexOf(this);
    popupsElement[index].classList.remove("popup_opened");
}
closePopupButtons.forEach((button) => {
    button.addEventListener('click', closePopup);
    })

function savePopup() {
    let index = Array.from(savePopupButtons).indexOf(this);
    popupsElement[index].classList.remove("popup_opened");
}
savePopupButtons.forEach((button) => {
    button.addEventListener('click', savePopup);
    })

// Обработчик «отправки» формы редактирования профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    // Получаем значение полей jobInput и nameInput из свойства value,
    // Выберираем элементы, куда должны быть вставлены значения полей
    // Вставляем новые значения с помощью textContent
    closePopup();
}

// Обработчик «отправки» формы сохдания карточки
//function handleFormSubmit(evt) {
    //evt.preventDefault();
    //cardsTitle.textContent = titleInput.value;
    //cardsImage.textContent = linkInput.value;
    //closePopup();
//}

formElement.addEventListener("submit", handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

