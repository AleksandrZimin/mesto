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
   link: 'https://images.unsplash.com/photo-1679564881633-fc8ef0c9c07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
}
];

/* Делаем выборку DOM элементов */
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');
const formElement = popupElement.querySelector('.form');
const addPopupElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup-el');
const closePopupElement = popupAddCardElement.querySelector('.popup-el__close');
const popupOpenPhotoElement = document.querySelector('.popup-photo');
const popupClosePhotoElement = document.querySelector('.popup-photo__close');
const openPopupElement = document.querySelector('.profile__add-button');
const openPopupPhotoEl = document.querySelector('.element__image');
const template = document.querySelector('.template').content;
const sectionElements = document.querySelector('.elements');
const formInputTitle = popupAddCardElement.querySelector('.form__input_place_title');
const formInputUrl = popupAddCardElement.querySelector('.form__input_place_url');
const formButton = popupAddCardElement.querySelector('.form__button');
const deleteButton = document.querySelector('.element__card');
const heartIcon = document.querySelector('.element__icon');
const itemCard = document.querySelector('.element');
const popupNameInputElement = document.querySelector('.form__input_place_name');
const popupNameJobElement = document.querySelector('.form__input_place_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

/* Закрытие и открытие поп апа редактирования личных данных */
const openPopup = function () {
popupElement.classList.add('popup_opened');
// document.body.style.overflow = "hidden";
popupNameInputElement.value = userName.textContent;
popupNameJobElement.value = userJob.textContent;
};
const closePopup = function () {
   popupElement.classList.remove('popup_opened');
   // document.body.style.overflow = '';
   };

/* Открыть/закрыть попап добавления карточек */
const openPopup2 = function() {
   popupAddCardElement.classList.add('popup-el_opened');
   };
const closePopup2 = function() {
   popupAddCardElement.classList.remove('popup-el_opened');
   // formInputTitle.value = '';
   // formInputUrl.value = '';
   };

/* Открыть/закрыть попап просмотра фото */
const openPopupPic = function() {
   popupOpenPhotoElement.classList.add('popup-photo_opened');
   };
const closePopupPic = function() {
   popupOpenPhotoElement.classList.remove('popup-photo_opened');
   // formInputTitle.value = '';
   // formInputUrl.value = '';
   };   

/* Закрытие поп апа при клике на overlay 
 const closePopupByClickOverlay = function (event) {
    if (event.target === event.currentTarget){
       closePopup();
    }
 } */

 initialCards.forEach(renderItem);

function renderItem(card) {
const clone = template.cloneNode(true);
clone.querySelector('.element__title').textContent = card.name;
clone.querySelector('.element__image').src = card.link;
clone.querySelector('.element__image').alt = card.name;
setEventListeners(clone);
sectionElements.append(clone);
}

function newObject (event) {
   event.preventDefault();
   let saveInputObject = new Object();
   saveInputObject.name = formInputTitle.value;
   saveInputObject.link = formInputUrl.value;
   
   initialCards.unshift(newObject);
   
};
console.dir(newObject);
document.querySelector('.form__button').addEventListener('submit', newObject);



/* Сохранение данных из формы на страницу */
function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.
   
   /* Вставляем новые значения с помощью textContent */
   userName.textContent = popupNameInputElement.value; 
   userJob.textContent = popupNameJobElement.value;
   closePopup();
}



function formSubmitHandler(evt) {
   evt.preventDefault();
   profileNameText.textContent = textName.value;
   profileSubtitleText.textContent = textSubtitle.value;
   closeEditProfilePopup();
}

/* Добавление карточки */
const handleSubmit = () => {
   const valueTitle = formInputTitle.value;
   const valueLink = formInputUrl.value;
renderItem(valueLink, valueTitle);
}

/* Удаление карточки */
function handleDelete (event) {
const card = event.target.closest('.element');
card.remove();
}
function setEventListeners (clone) {
clone.querySelector('.element__delete').addEventListener('click', handleDelete);
}

/** Регистрируем обработчики событий */
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit); 
openPopupElement.addEventListener("click", openPopup2);
closePopupElement.addEventListener("click", closePopup2);
popupClosePhotoElement.addEventListener("click", closePopupPic);
formButton.addEventListener('submit', handleSubmit);
// openPopupPhotoEl.addEventListener("click", openPopupPic);
// itemCard.addEventListener('click', openPopupPic); - не работает!?
// popupElement.addEventListener("click", closePopupByClickOverlay);
// formButton.addEventListener("click", pushItem);
