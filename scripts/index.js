import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [{
   name: 'Архыз',
   link: 'https://images.unsplash.com/photo-1679095007377-e6c8e13f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
   name: 'Челябинская область',
   link: 'https://images.unsplash.com/photo-1679530987837-6b1d9b660d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
   name: 'Иваново',
   link: 'https://images.unsplash.com/photo-1679239235604-34809f02e2cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
   name: 'Камчатка',
   link: 'https://images.unsplash.com/photo-1678938940744-0fc1c7953b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
   name: 'Холмогорский район',
   link: 'https://images.unsplash.com/photo-1679267207806-53137718141b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
   name: 'Байкал',
   link: 'https://images.unsplash.com/photo-1679564881633-fc8ef0c9c07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
}
];

const validationConfig = {
   formSelector: '.form',
   inputSelector: '.form__input',
   submitButtonSelector: '.form__button',
   inactiveButtonClass: 'form__button_disabled',
   inputErrorClass: 'form__input_error',
   errorClass: 'popup-error_visible'
 }

/* Делаем выборку DOM элементов */
const profilePopup = document.querySelector('.profile-popup');
const popupCloseButtonElement = profilePopup.querySelector('.popup-profile-close');
const popupOpenButtonElement = document.querySelector('.profile__button');
// const formElement = profilePopup.querySelector('.form');
const formElementProfile = document.querySelector('.form_type_profile');
const formElementAddCard = document.querySelector('.form_type_addCard');
const addPopupElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.card-popup');
const closePopupElement = popupAddCardElement.querySelector('.popup-card-close');
const popupOpenPhotoElement = document.querySelector('.popup-photo');
const popupClosePhotoElement = popupOpenPhotoElement.querySelector('.popup-photo-close');

const openPopupPhotoEl = document.querySelector('.element__image');
const template = document.querySelector('.template').content;
const sectionElements = document.querySelector('.elements');
const formInputTitle = popupAddCardElement.querySelector('.form__input_place_title');
const formInputUrl = popupAddCardElement.querySelector('.form__input_place_url');
const formButton = popupAddCardElement.querySelector('.form__button');
const deleteButton = document.querySelector('.element__card');
const heartIcon = document.querySelector('.element__icon');
const itemCard = document.querySelector('.element');
const popupNameInputElement = profilePopup.querySelector('.form__input_place_name');
const popupNameJobElement = profilePopup.querySelector('.form__input_place_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
/* Получение кнопок для валидации формы*/
const addPlaceBtn = document.querySelector('.form__button_type_place')
const addProfileBtn = document.querySelector('.form__button_type_profile')

const photoSubtitle = popupOpenPhotoElement.querySelector('.popup__subtitle');
const photoItemPopup = popupOpenPhotoElement.querySelector('.popup__item');
const elementTitle = document.querySelector('.element__title');

const profileValidator = new FormValidator(validationConfig, formElementProfile)
const cardValidator = new FormValidator(validationConfig, formElementAddCard)
profileValidator.enableValidation();
cardValidator.enableValidation(); // Вызов функции валидации

/* Открытие поп апа */
const openPopup = function (namePopup) {
 namePopup.classList.add('popup_opened');
 document.addEventListener('keydown', closePopupEsc); 
// document.body.style.overflow = "hidden";
};

/* Закрытие поп апа */
const closePopup  = function (namePopup) {
   namePopup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc); 
   // document.body.style.overflow = '';
};

/* Вывод элементов */
//  initialCards.forEach((card) => {renderItem(card.link, card.name)});

// function renderItem(link, name) {
// const card = makeCard(link, name);
// sectionElements.prepend(card);
// };

/*Создание карточки */
// function makeCard(link, name) {
//    const clone = template.cloneNode(true);
//    const photoItem = clone.querySelector('.element__image');

//    clone.querySelector('.element__title').textContent = name;
//    photoItem.src = link;
//    photoItem.alt = name;
 /* Открытие фото */
//    photoItem.addEventListener("click", () => {
//       openPopup(popupOpenPhotoElement) 
//       photoSubtitle.textContent = name;
//       photoItemPopup.alt = name;
//       photoItemPopup.src = link;
//        });

//    clone.querySelector('.element__delete').addEventListener('click', handleDelete);
//    clone.querySelector('.element__icon').addEventListener('click', handleLike);

//    return clone
// }

function openPhoto(name, link) { 
      photoItemPopup.src = link;
      photoSubtitle.textContent = name;
      photoItemPopup.alt = name;
      openPopup(popupOpenPhotoElement)
}

/* Сохранение данных из формы на страницу */
function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.
   
   /* Вставляем новые значения с помощью textContent */
   userName.textContent = popupNameInputElement.value; 
   userJob.textContent = popupNameJobElement.value;
   profileValidator.disableButton();
   closePopup(profilePopup);
}

/* Добавление карточки */
const handleSubmit = (evt) => {
   evt.preventDefault();
   const valueLink = formInputUrl.value;
   const valueTitle = formInputTitle.value;
   const card = new Card({ name: valueTitle, link: valueLink }, '.template', openPhoto);
   const cardsList = document.querySelector('.elements');
   const cardElement = card.generateCard();
   cardsList.prepend(cardElement);
   closePopup(popupAddCardElement);
   evt.target.reset();
   // disableButton(addPlaceBtn, validationConfig.inactiveButtonClass)
   cardValidator.disableButton();
   // disableButton(addProfileBtn, validationConfig.inactiveButtonClass)
}

/* Удаление карточки */
// function handleDelete (event) {
// const card = event.target.closest('.element');
// card.remove();
// }

/* evt = событие */
// function handleLike (evt) {
//    const likeButton = evt.target;
//    likeButton.classList.toggle('element__icon_active');
// }

/* Закрытие попапа на Esc*/
function closePopupEsc (evt) {
   if(evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened')
      closePopup(openedPopup);
   }
}

/* Закрытие попапа на Overlay*/
function closePopupOvarlay (evt, popupName) {
   if (evt.target === evt.currentTarget){
      closePopup(popupName);
   }
}


/* Регистрируем обработчики событий */
popupOpenButtonElement.addEventListener("click", () => { 
popupNameInputElement.value = userName.textContent;
popupNameJobElement.value = userJob.textContent;
profileValidator.resetForm()
profileValidator.disableButton();
openPopup(profilePopup) });
addPopupElement.addEventListener("click", () => { openPopup(popupAddCardElement) });
popupClosePhotoElement.addEventListener("click", () => {closePopup(popupOpenPhotoElement) });
popupCloseButtonElement.addEventListener("click", () => {closePopup(profilePopup)});
closePopupElement.addEventListener("click", () => {
closePopup(popupAddCardElement)});
formElementAddCard.addEventListener('submit', (evt) => {handleSubmit(evt)});
formElementProfile.addEventListener('submit', handleFormSubmit); 

/* Закрытие попапов при нажатии на OverLay */
profilePopup.addEventListener('click', (evt) => {closePopupOvarlay(evt, profilePopup)});
popupOpenPhotoElement.addEventListener('click', (evt) => {closePopupOvarlay(evt, popupOpenPhotoElement)});
popupAddCardElement.addEventListener('click', (evt) => {closePopupOvarlay(evt, popupAddCardElement)});


initialCards.forEach((initialCard) => {
// const cardTemplateSelector = document.querySelector('.template');
const cardsList = document.querySelector('.elements');

const card = new Card(initialCard, '.template', openPhoto);
const cardElement = card.generateCard();

// Добавляем элемент на страницу
cardsList.prepend(cardElement);

});