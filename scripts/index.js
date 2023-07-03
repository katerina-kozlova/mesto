// П Е Р Е М Е Н Н Ы Е (общее)
const closePopupButtons = document.querySelectorAll(".popup__close-button"); // Кнопки закрытия попапа
const popupsElement = document.querySelectorAll(".popup"); // Все попапы
const openPopupButtons = document.querySelectorAll(".button_type_open"); // Все кнопки открытия попапа
// П Е Р Е М Е Н Н Ы Е (редактирования профиля)
const openButtonProfile = document.querySelector(".profile__correct-button"); // Кнопка редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // Кнопка закрытия редактирования профиля
const savePopupButton = document.querySelector("#save-button"); // Кнопка сохранения информации профиля
const formElementEdit = document.querySelector("#popup-form-edit"); // Форма редактирования профиля
const popupProfile = document.querySelector("#popup-profile"); // Попап профиля
// Находим поля формы редактирования в DOM:
const nameInput = formElementEdit.querySelector("#name");
const jobInput = formElementEdit.querySelector("#description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
// Ф У Н К Ц И И
// Функция для ОТКРЫТИЯ ВСЕХ ПОПАПОВ
function openPopup() {
    const index = Array.from(openPopupButtons).indexOf(this);
    popupsElement[index].classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
openButtonProfile.addEventListener("click", openPopup); // Прикрепляем слушатель для ОТКРЫТИЯ попопа РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Функция для СОХРАНЕНИЯ новой информации РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function savePopupProfile() {
    popupProfile.classList.remove("popup_opened");
}
savePopupButton.addEventListener("click", savePopupProfile); // Слушатель для СОХРАНЕНИЯ новой информации РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Функция, которая ЗАКРЫВАЕТ попапы по нажатию на крестик
function closePopup() {
    const index = Array.from(closePopupButtons).indexOf(this);
    popupsElement[index].classList.remove("popup_opened");
}
closeButtonProfile.addEventListener("click", closePopup);
// Функция «отправки» формы редактирования профиля
function handleFormEditSubmit(evt) {
    evt.preventDefault();
    // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    // Получаем значение полей jobInput и nameInput из свойства value,
    // Выберираем элементы, куда должны быть вставлены значения полей
    // Вставляем новые значения с помощью textContent
    savePopupProfile();
}
// Обработчик «отправки» формы редактирования профиля
// Прикрепляем обработчик к форме:
formElementEdit.addEventListener("submit", handleFormEditSubmit); // он будет следить за событием “submit” - «отправка»

// П Е Р Е М Е Н Н Ы Е (добавление карточки)
const openButtonCard = document.querySelector(".profile__add-button"); // Кнопка добавления карточки
const closeButtonCard = document.querySelector("#close-button-card"); // Кнопка закрытия попапа добавления карточки
const addPopupButton = document.querySelector("#add-button"); // Кнопка добавления карточки
const formElementAdd = document.querySelector("#popup-form-add"); // Форма добавления карточки
const popupCard = document.querySelector("#popup-card"); // Попап карточки
const initialCardsList = document.querySelector(".cards"); //ul
const initialCardsTemplate = document.querySelector(".card-template").content; //template
// П Е Р Е М Е Н Н Ы Е (функционал карточек)
const namePopupImage = document.querySelector(".popup__caption");
const srcPopupImage = document.querySelector(".popup__image");
const altPopupImage = document.querySelector(".popup__image");
const cards = document.querySelectorAll(".cards__element");
const popupDescription = document.querySelector("#popup-description"); // Попап для просмотра картинки
const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template");

// Ф У Н К Ц И И
// Функция открытия была описана выше
openButtonCard.addEventListener("click", openPopup); // Слушатель для ОТКРЫТИЯ попопа ДОБАВЛЕНИЯ КАРТОЧКИ
// Функция для СОХРАНЕНИЯ новой КАРТОЧКИ
function savePopupCard() {
    popupCard.classList.remove("popup_opened");
}
savePopupButton.addEventListener("click", savePopupCard); // Слушатель для СОХРАНЕНИЯ новой КАРТОЧКИ
// Функция закрытия была описана выше
closeButtonCard.addEventListener("click", closePopup);

initialCards.forEach((item) => {
    const card = createCard(item.link, item.name);
    cardContainer.appendChild(card);
});

function createCard(link, name) {
    const cardClone = cardTemplate.content.cloneNode(true);
    const card = cardClone.querySelector(".cards__element");
    const cardImage = cardClone.querySelector(".cards__image");
    const cardTitle = cardClone.querySelector(".cards__title");

    cardImage.src = link;
    cardTitle.textContent = name;
    cardImage.alt = name;

    // П Е Р Е М Е Н Н Ы Е (функционал карточек)
    const deleteButton = card.querySelectorAll(".cards__delete"); // Находим все кнопки удаления карточек
    const likeButton = card.querySelectorAll(".cards__like"); // Находим все кнопки
    const closeButtonImage = document.querySelector("#close-button-image"); // Кнопка закрытия попапа добавления карточки

    function deleteCard() {
        const index = Array.from(deleteButton).indexOf(this);
        deleteButton[index].parentElement.remove();
    }
    deleteButton.forEach((button) => {
        button.addEventListener("click", deleteCard);
    });
    function likeCard() {
        const index = Array.from(likeButton).indexOf(this);
        likeButton[index].classList.toggle("cards__like_active");
    }
    likeButton.forEach((button) => {
        button.addEventListener("click", likeCard);
    });
    closeButtonImage.addEventListener("click", closePopup);

    cardImage.addEventListener("click", () => {
        openPopupImage(link, name);
    });

    return card;
}

function addCard(link, name) {
    const card = createCard(link, name);
    cardContainer.prepend(card);
}

function openPopupImage(link, name) {
    srcPopupImage.src = link;
    namePopupImage.textContent = name;
    altPopupImage.alt = name;
    popupDescription.classList.add("popup_opened");
}

cards.forEach((element) => {
    const cardImage = element.querySelector(".cards__image");
    const cardTitle = element.querySelector(".cards__title");
    cardImage.addEventListener("click", () => {
        const link = cardImage.getAttribute("src");
        const name = cardTitle.textContent;
        openPopupImage(link, name);
    });
});

// Функция «отправки» формы добавления новой карточки
function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const link = document.querySelector("#link");
    const name = document.querySelector("#title");
    addCard(link.value, name.value);
    formElementAdd.reset();
    savePopupCard();
}
formElementAdd.addEventListener("submit", handleFormAddSubmit);
