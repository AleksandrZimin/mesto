
 /** Делаем выборку DOM элементов */

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');
const formElement = popupElement.querySelector('.form');

let popupNameInputElement = document.querySelector('.form__input_place_name');
let popupNameJobElement = document.querySelector('.form__input_place_job');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');

const openPopup = function () {
popupElement.classList.add('popup_opened');
// document.body.style.overflow = "hidden";

popupNameInputElement.value = userName.textContent;
popupNameJobElement.value = userJob.textContent;

function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.
   
   /** Вставляем новые значения с помощью textContent */
   userName.textContent = popupNameInputElement.value; 
   userJob.textContent = popupNameJobElement.value;

   closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 
}

// popupNameInputElement.value = userName;
// popupNameJobElement.value = userJob;

const closePopup = function () {
   popupElement.classList.remove('popup_opened');
   // document.body.style.overflow = '';
   }

/** Закрытие поп апа при клике на overlay */

// const closePopupByClickOverlay = function (event) {
//    if (event.target === event.currentTarget){
//       closePopup();
//    }
// } 

/** Регистрируем обработчики событий */
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
// popupElement.addEventListener("click", closePopupByClickOverlay);



