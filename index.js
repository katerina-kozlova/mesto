const aboutButtonElement = document.querySelector('.profile__button_place-info'); 
// Обозначаем переменную и ищем по классу кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup__close-button');
const saveButtonElement = document.querySelector('.popup__save-button');
const popupElement = document.querySelector('.popup');

function popupOpen() {
    popupElement.classList.add('popup_opened');
    // Создали функцию открытия попапа: имя + ее действие: класс + метод, который добавляет или убирает класс
} 

function popupClose() {
    popupElement.classList.remove('popup_opened');
}

window.addEventListener('load', popupClose);
// При загрузке страницы попап закрыт

aboutButtonElement.addEventListener('click', popupOpen); 
// имя переменной + способ зарегистрировать обработчик события,
// в скобках значение: по какому действию и какая функция выполняется

// Создали функцию и вызвали ее по клику. Теперь по нажатию кнопки "редакировать профиль" открывается окно/попап

closeButtonElement.addEventListener('click', popupClose);
// Теперь по нажатию на крестик попап закрывается

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_description');// Воспользуйтесь инструментом .querySelector()

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


// Обработчик «отправки» формы, хотя пока
function handleFormSubmit (evt) {
    evt.preventDefault(); 
// Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
profileName.textContent = nameInput.value;
profileDescription.textContent = jobInput.value;
// Получаем значение полей jobInput и nameInput из свойства value,
// Выберираем элементы, куда должны быть вставлены значения полей
// Вставляем новые значения с помощью textContent
popupClose()
}

formElement.addEventListener('submit', handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»