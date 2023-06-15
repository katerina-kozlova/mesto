const aboutButtonElement = document.querySelector(".profile__correct-button");
// Обозначаем переменную и ищем по классу кнопку редактирования профиля
const closeButtonElement = document.querySelector(".popup__close-button");
const popupElement = document.querySelector(".popup");
// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector("#name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector("#description"); // Воспользуйтесь инструментом .querySelector()
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

function openPopup() {
    popupElement.classList.add("popup_opened");
    // Создали функцию открытия попапа: имя + ее действие: класс + метод, который добавляет или убирает класс
}

function closePopup() {
    popupElement.classList.remove("popup_opened");
}

// Обработчик «отправки» формы, хотя пока
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

aboutButtonElement.addEventListener("click", openPopup);
// имя переменной + способ зарегистрировать обработчик события,
// в скобках значение: по какому действию и какая функция выполняется
// Создали функцию и вызвали ее по клику. Теперь по нажатию кнопки "редакировать профиль" открывается окно/попап

closeButtonElement.addEventListener("click", closePopup);
// Теперь по нажатию на крестик попап закрывается

formElement.addEventListener("submit", handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
