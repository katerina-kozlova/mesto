const openPopupButtons = document.querySelectorAll(".button__open"); // Кнопка открытия попапа в DOM
const closePopupButtons = document.querySelectorAll(".popup__close-button"); // Кнопка закрытия попапа в DOM
const savePopupButtons = document.querySelectorAll(".popup__save-button"); // Кнопка сохранения информации в DOM
const popupsElement = document.querySelectorAll(".popup"); // Попапы в DOM
const formElement1 = document.querySelector(".popup__form-1"); // Находим форму в DOM
const popupProfile = document.querySelector("#popup-profile");
const popupCard = document.querySelector("#popup-card");

console.log(savePopupButtons);

// Находим поля формы редактирования в DOM:
let nameInput = formElement1.querySelector("#name");
let jobInput = formElement1.querySelector("#description");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

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

  // Функция, которая открывает необходимый попап в зависимости от того, на какую кнопку пользоваться кликнул

function savePopup(popupProfile, popupCard) {
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
  savePopup(popupProfile);
}

formElement1.addEventListener("submit", handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»



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

// Находим эелементы на страницк
const formElement2 = document.querySelector(".popup__form-2");
const initialCardsList = document.querySelector('.cards'); //ul 
const initialCardsTemplate = document.querySelector('.card-template').content; //template 
let titleInput = formElement2.querySelector("#title");
let linkInput = formElement2.querySelector("#link");
let cardName = document.querySelector('.cards__title');
let cardImage = document.querySelector('.cards__image');
const addPopupButtons = document.querySelectorAll(".popup__add-button");

initialCards.forEach(function (element) {
  let initialCardsElement = initialCardsTemplate.cloneNode(true); // дубликат узла
  initialCardsElement.querySelector('.cards__title').textContent = element.name;
  initialCardsElement.querySelector('.cards__image').src = element.link;
  initialCardsList.append(initialCardsElement)
});

function addCard(linkValue, titleValue) {
  const cardContainer = document.createElement('li');
  cardContainer.classList.add('cards__element');

  const imageElement = document.createElement('img');
  imageElement.classList.add('cards__image');
  imageElement.src = linkValue;

  const divElement = document.createElement('div');
  divElement.classList.add('cards__group');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('cards__title');
  titleElement.textContent = titleValue;
  divElement.prepend(titleElement);

  const likeButtonElement = document.createElement('button');
  likeButtonElement.classList.add('cards__like', 'button');
  divElement.appendChild(likeButtonElement);

  initialCardsList.prepend(cardContainer);

  cardContainer.prepend(imageElement, divElement);
  divElement.prepend(titleElement);
  divElement.appendChild(likeButtonElement);

  likeButtonElement.addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  }); 
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const src = document.querySelector("#link");
  const title = document.querySelector("#title");

  addCard(src.value, title.value);
  
  src.value = '';
  title.value = '';

  savePopup(popupCard);
}

formElement2.addEventListener('submit', handleCardSubmit);


// ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК ЛАЙК
const likeButton = document.querySelectorAll(".cards__like");

function likeCard() {
  let index = Array.from(likeButton).indexOf(this);
  likeButton[index].classList.toggle("cards__like_active");
}
likeButton.forEach((button) => {
  button.addEventListener('click', likeCard);
  })
