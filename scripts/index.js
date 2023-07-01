// П Е Р Е М Е Н Н Ы Е (общее)
const closePopupButtons = document.querySelectorAll(".popup__close-button"); // Кнопки закрытия попапа
const popupsElement = document.querySelectorAll(".popup"); // Все попапы
// П Е Р Е М Е Н Н Ы Е (редактирования профиля)
const openButtonProfile = document.querySelector(".profile__correct-button"); // Кнопка редактирования профиля
const savePopupButton = document.querySelector(".popup__save-button"); // Кнопка сохранения информации профиля
const formElement1 = document.querySelector(".popup__form-1"); // Форма редактирования профиля
const popupProfile = document.querySelector("#popup-profile"); // Попап профиля
// Находим поля формы редактирования в DOM:
let nameInput = formElement1.querySelector("#name");
let jobInput = formElement1.querySelector("#description");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
// Ф У Н К Ц И И
// Функция для ОТКРЫТИЯ попопа РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupProfile() {
    popupProfile.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
openButtonProfile.addEventListener("click", openPopupProfile); // Прикрепляем слушатель для ОТКРЫТИЯ попопа РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Функция для СОХРАНЕНИЯ новой информации РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function savePopupProfile() {
    popupProfile.classList.remove("popup_opened");
}
savePopupButton.addEventListener("click", savePopupProfile); // Слушатель для СОХРАНЕНИЯ новой информации РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Функция, которая ЗАКРЫВАЕТ попапы по нажатию на крестик
function closePopupAll() {
    let index = Array.from(closePopupButtons).indexOf(this);
    popupsElement[index].classList.remove("popup_opened");
}
closePopupButtons.forEach((button) => {
    button.addEventListener("click", closePopupAll);
});
// Функция «отправки» формы редактирования профиля
function handleFormSubmit(evt) {
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
formElement1.addEventListener("submit", handleFormSubmit); // он будет следить за событием “submit” - «отправка»

// П Е Р Е М Е Н Н Ы Е (добавление карточки)
const openButtonCard = document.querySelector(".profile__add-button"); // Кнопка добавления карточки
const addPopupButton = document.querySelector(".popup__add-button"); // Кнопка добавления карточки
const formElement2 = document.querySelector(".popup__form-2"); // Форма добавления карточки
const popupCard = document.querySelector("#popup-card"); // Попап карточки
// Находим поля формы добавления карточки в DOM:
const initialCards = [
    {
        name: "Алтай",
        link: "https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        name: "Алтай",
        link: "https://images.unsplash.com/photo-1635499829006-f18084159cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    },
    {
        name: "Озеро Рица",
        link: "https://images.unsplash.com/photo-1631170706315-707ecc9f158b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
    },
    {
        name: "Сиамский залив",
        link: "https://images.unsplash.com/photo-1596463621264-26fa44b7a2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    },
    {
        name: "Чёрное море",
        link: "https://images.unsplash.com/photo-1601033089147-f9d34a7629ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
        name: "Река Катунь",
        link: "https://images.unsplash.com/photo-1564324738191-7f91304232eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
];
const initialCardsList = document.querySelector(".cards"); //ul
const initialCardsTemplate = document.querySelector(".card-template").content; //template
// Ф У Н К Ц И И
// Функция для ОТКРЫТИЯ попопа ДОБАВЛЕНИЯ КАРТОЧКИ
function openPopupCard() {
    popupCard.classList.add("popup_opened");
}
openButtonCard.addEventListener("click", openPopupCard); // Слушатель для ОТКРЫТИЯ попопа ДОБАВЛЕНИЯ КАРТОЧКИ
// Функция для СОХРАНЕНИЯ новой КАРТОЧКИ
function savePopupCard() {
    popupCard.classList.remove("popup_opened");
}
savePopupButton.addEventListener("click", savePopupCard); // Слушатель для СОХРАНЕНИЯ новой КАРТОЧКИ
// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве initialCards:
initialCards.forEach(function (element) {
    let initialCardsElement = initialCardsTemplate.cloneNode(true); // дубликат узла
    initialCardsElement.querySelector(".cards__title").textContent = element.name;
    initialCardsElement.querySelector(".cards__image").src = element.link;
    initialCardsElement.querySelector(".cards__image").alt = element.name;
    initialCardsList.append(initialCardsElement); // В ul добавляем контект тега template, который меняется
});
// Функция для ДОБАВЛЕНИЯ новой КАРТОЧКИ
// Передаем параметры, которые будут меняться: ссылка на картинку и название карточки
function addCard(linkValue, titleValue) {
    const cardContainer = document.createElement("li"); // Создаем новую карточку
    cardContainer.classList.add("cards__element"); // Присваиваем новой карточке класс

    const imageElement = document.createElement("img"); // Картинка
    imageElement.classList.add("cards__image");
    imageElement.src = linkValue; // Указываем, откуда ссылка на картинку будет браться
    imageElement.alt = titleValue;

    const deleteButtonElement = document.createElement("button"); // Кнопка удаления
    deleteButtonElement.classList.add("cards__delete", "button");

    const divElement = document.createElement("div"); // Блок, в котором содержатся название карточки и кнопка лайка
    divElement.classList.add("cards__group");

    const titleElement = document.createElement("h2"); // Название
    titleElement.classList.add("cards__title");
    titleElement.textContent = titleValue; // Указываем, откуда название картинки будет браться

    const likeButtonElement = document.createElement("button"); // Кнопка лайка
    likeButtonElement.classList.add("cards__like", "button");

    initialCardsList.prepend(cardContainer); // Кладем созданную карточку (li) в начало контейнера (ul)

    cardContainer.prepend(imageElement, deleteButtonElement, divElement); // Элементы (картинка, кнопка удаления и блок) кладем в начало карточки (li)
    divElement.prepend(titleElement); // Кладем название карточки в созданный выше блок в начало
    divElement.appendChild(likeButtonElement); // Кладем кнопку лайка в созданный выше блок в конец

    imageElement.addEventListener("click", () => {
        const imageUrl = imageElement.getAttribute("src");
        const title = titleElement.textContent;
        openPopupImage(imageUrl, title);
    });

    // Добавляем возможность ставить лайк на созданные карточки
    likeButtonElement.addEventListener("click", function (evt) {
        evt.target.classList.toggle("cards__like_active");
    });
    // Добавляем возможность удалять созданные карточки
    deleteButtonElement.addEventListener("click", function (evt) {
        evt.target.parentElement.remove();
    });
}
// Функция «отправки» формы добавления новой карточки
function handleCardSubmit(evt) {
    evt.preventDefault();
    const src = document.querySelector("#link");
    const title = document.querySelector("#title");
    addCard(src.value, title.value);
    src.value = "";
    title.value = "";
    savePopupCard();
}
formElement2.addEventListener("submit", handleCardSubmit);

// П Е Р Е М Е Н Н Ы Е (функционал карточек)
let namePopupImage = document.querySelector(".popup__caption");
let srcPopupImage = document.querySelector(".popup__image");
const cards = document.querySelectorAll(".cards__element");
const popupDescription = document.querySelector("#popup-description"); // Попап для просмотра картинки
const deleteButton = document.querySelectorAll(".cards__delete"); // Находим все кнопки удаления карточек
const likeButton = document.querySelectorAll(".cards__like"); // Находим все кнопки
// Ф У Н К Ц И И
// Функция для ОТКРЫТИЯ попапа С КАРТИНКОЙ И ИМЕНЕМ
function openPopupImage(imageUrl, title) {
    srcPopupImage.src = imageUrl;
    namePopupImage.textContent = title;
    popupDescription.classList.add("popup_opened");
}
cards.forEach((element) => {
    const cardImage = element.querySelector(".cards__image");
    const cardTitle = element.querySelector(".cards__title");
    cardImage.addEventListener("click", () => {
        const imageUrl = cardImage.getAttribute("src");
        const title = cardTitle.textContent;
        openPopupImage(imageUrl, title);
    });
});

// Функция для ЛАЙКА (меняем контурное сердечко на черное)
function likeCard() {
    let index = Array.from(likeButton).indexOf(this);
    likeButton[index].classList.toggle("cards__like_active");
}
// Слушатель для ЛАЙКА (меняем контурное сердечко на черное по клику на него)
likeButton.forEach((button) => {
    button.addEventListener("click", likeCard);
});
function deleteCard() {
    let index = Array.from(deleteButton).indexOf(this);
    deleteButton[index].parentElement.remove();
}
deleteButton.forEach((button) => {
    button.addEventListener("click", deleteCard);
});
