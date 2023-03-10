// Проверяем что скрипт подключен и он работает

console.log('start');

// Делаем выборку DOM элементов

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');
const formElement = popupElement.querySelector('.popup__form');
const popupSubmitButtonElement = popupElement.querySelector('.popup__button');
const popupNameInputElement = document.querySelector('.popup__field1');
const popupNameJobElement = document.querySelector('.popup__field2');

let userName = document.querySelector('.profile__name').textContent;
let userJob = document.querySelector('.profile__job').textContent;


const openPopup = function () {
popupElement.classList.add('popup_opened');
document.body.style.overflow = "hidden";
console.log('open');
}

const closePopup = function () {
   popupElement.classList.remove('popup_opened');
   document.body.style.overflow = '';
   console.log('close');
   }

const closePopupByClickOverlay = function (event) {
   console.log (event.target, event.currentTarget);
   if (event.target === event.currentTarget){
      closePopup();
   }
} 

// Регистрируем обработчики событий

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOverlay);

popupNameInputElement.value = userName;
popupNameJobElement.value = userJob;
console.log(userName);
console.log(userJob);

function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.

   // Получите значение полей jobInput и nameInput из свойства value
   console.log('start');
   let newName = popupNameInputElement.value;
   let newJob = popupNameJobElement.value;
   // Выберите элементы, куда должны быть вставлены значения полей
   let userName = document.querySelector('.profile__name');
   let userJob = document.querySelector('.profile__job');
   // Вставьте новые значения с помощью textContent
   userName.textContent = newName;
   userJob.textContent = newJob;
   console.log('finish');
   closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 

