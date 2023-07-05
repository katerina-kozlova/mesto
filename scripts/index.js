// П Е Р Е М Е Н Н Ы Е (общее)
const popupCard = document.querySelector("#popup-card"); // Попап карточки
const popupProfile = document.querySelector("#popup-profile"); // Попап профиля
const popupDescription = document.querySelector("#popup-description"); // Попап для просмотра картинки
// П Е Р Е М Е Н Н Ы Е (редактирования профиля)
const openButtonProfile = document.querySelector(".profile__correct-button"); // Кнопка редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // Кнопка закрытия редактирования профиля
const formElementEdit = document.querySelector("#popup-form-edit"); // Форма редактирования профиля
// Находим поля формы редактирования в DOM:
const nameInput = formElementEdit.querySelector("#name");
const jobInput = formElementEdit.querySelector("#description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
// Ф У Н К Ц И И
// Функция открытия и функция закрытия описаны в конце
// Прикрепляем слушатель для ОТКРЫТИЯ И ЗАКРЫТИЯ попопа РЕДАКТИРОВАНИЯ ПРОФИЛЯ
openButtonProfile.addEventListener("click", function () {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent; 
    jobInput.value = profileDescription.textContent;
});
closeButtonProfile.addEventListener("click", function () {
    closePopup(popupProfile);
});
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
    closePopup(popupProfile);
}
// Обработчик «отправки» формы редактирования профиля
// Прикрепляем обработчик к форме:
formElementEdit.addEventListener("submit", handleFormEditSubmit); // он будет следить за событием “submit” - «отправка»

// П Е Р Е М Е Н Н Ы Е (добавление карточки)
const openButtonCard = document.querySelector(".profile__add-button"); // Кнопка добавления карточки
const closeButtonCard = document.querySelector("#close-button-card"); // Кнопка закрытия попапа добавления карточки
const formElementAdd = document.querySelector("#popup-form-add"); // Форма добавления карточки
const cardContainer = document.querySelector(".cards"); //ul
const cardTemplate = document.querySelector(".card-template"); // template
const closeButtonImage = document.querySelector("#close-button-image"); // Кнопка закрытия попапа добавления карточки
// Ф У Н К Ц И И
// Слушатель для ОТКРЫТИЯ И ЗАКРЫТИЯ попопа ДОБАВЛЕНИЯ КАРТОЧКИ
openButtonCard.addEventListener("click", function () {
    openPopup(popupCard);
});
closeButtonCard.addEventListener("click", function () {
    closePopup(popupCard);
});
// Перебираем массив карточек
initialCards.forEach((item) => {
    const card = createCard(item.link, item.name);
    cardContainer.appendChild(card);
});
// Добавление карточек из массива и кладем в UL
function createCard(link, name) {
    const cardClone = cardTemplate.content.cloneNode(true);
    const card = cardClone.querySelector(".cards__element");
    const cardImage = cardClone.querySelector(".cards__image");
    const cardTitle = cardClone.querySelector(".cards__title");

    cardImage.src = link;
    cardTitle.textContent = name;
    cardImage.alt = name;

    const deleteButton = card.querySelector(".cards__delete"); // Находим кнопку удаления карточек
    const likeButton = card.querySelector(".cards__like"); // Находим кнопку лайка
    const namePopupImage = document.querySelector(".popup__caption");
    const srcPopupImage = document.querySelector(".popup__image");
    const altPopupImage = document.querySelector(".popup__image");
    
    // Функция и слушатель для удаления карточки
    function deleteCard() {
        deleteButton.parentElement.remove();
    }
    deleteButton.addEventListener("click", deleteCard);
    // Функция и слушатель для лайка карточки
    function likeCard() {
        likeButton.classList.toggle("cards__like_active");
    }
    likeButton.addEventListener("click", likeCard);
    // Слушатель для ОТКРЫТИЯ попапа с картинкой
    cardImage.addEventListener("click", () => {
        srcPopupImage.src = link;
        namePopupImage.textContent = name;
        altPopupImage.alt = name;
        openPopup(popupDescription); 
    }); 
    
    return card;
}

// Слушатель для ЗАКРЫТИЯ попапа с картинкой
closeButtonImage.addEventListener("click", function () {
    closePopup(popupDescription);
});
// Функция добалвения новой карточки
function addCard(link, name) {
    const card = createCard(link, name);
    cardContainer.prepend(card);
}
// Функция «отправки» формы добавления новой карточки
function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const link = document.querySelector("#link");
    const name = document.querySelector("#title");
    addCard(link.value, name.value);
    formElementAdd.reset();
    closePopup(popupCard);
}
formElementAdd.addEventListener("submit", handleFormAddSubmit);

// Функция для ОТКРЫТИЯ ВСЕХ ПОПАПОВ
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}
// Функция для ЗАКРЫТИЯ ВСЕХ ПОПАПОВ
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}