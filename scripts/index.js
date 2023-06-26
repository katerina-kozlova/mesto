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

const initialCards = [
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1635499829006-f18084159cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'
  },
  {
    name: 'Озеро Рица',
    link: 'https://images.unsplash.com/photo-1631170706315-707ecc9f158b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80'
  },
  {
    name: 'Сиамский залив',
    link: 'https://images.unsplash.com/photo-1596463621264-26fa44b7a2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Чёрное море',
    link: 'https://images.unsplash.com/photo-1601033089147-f9d34a7629ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Река Катунь',
    link: 'https://images.unsplash.com/photo-1564324738191-7f91304232eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const templateElement = document.querySelector('.card-template');
const cardsContainer = document.querySelector('.cards');

const createCard = ({ name, link }) => {
  const clone = templateElement.content.cloneNode(true);
  const cardsElement = clone.querySelector('.cards__element'); // Клонируем содержимое шаблона, чтобы добавить новую карточку
  cardsElement.querySelector('.cards__image').src = link;
  cardsElement.querySelector('.cards__title').textContent = name;
  return cardsElement;
}


initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardsContainer.append(cardElement(item));
});

// Обработчик «отправки» формы редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;
  const cardHtml = createCard({ name, link });
  cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
  closePopup();
}


formElement.addEventListener("submit", handleFormSubmit);

//const cardsTemplate = document.querySelector('#cards-template').content; // Находим тег temlate для карточки в DOM и обращаемся к его свойству через content
//const cardsElement = cardsTemplate.querySelector('.cards__element').cloneNode(true); // Клонируем содержимое шаблона, чтобы добавить новую карточку
//const container = document.querySelector('.elements');
//initialCards.forEach((place) => {
  
  //cardsElement.querySelector('.cards__image').src = place.link;
  //cardsElement.querySelector('.cards__title').textContent = place.name;
  //container.append(cardsElement);
//});

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

formElement.addEventListener("submit", handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»