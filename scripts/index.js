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
   size: 54
}
];

/* Делаем выборку DOM элементов */
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');
const formElement = popupElement.querySelector('.form');
const formElementAddCard = document.querySelector('.form_type_addCard');
const addPopupElement = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup-el');
const closePopupElement = popupAddCardElement.querySelector('.popup-el__close');
const popupOpenPhotoElement = document.querySelector('.popup-photo');
const popupClosePhotoElement = document.querySelector('.popup-photo__close');

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

const photoSubtitle = document.querySelector('.popup-photo__subtitle');
const photoItemPopup = document.querySelector('popup-photo__item');
const elementTitle = document.querySelector('.element__title');

/* Открытие поп апа */
const openPopup = function (namePopup) {
 namePopup.classList.add('popup_opened');
// document.body.style.overflow = "hidden";
};

/* Закрытие поп апа */
const closePopup  = function (namePopup) {
   namePopup.classList.remove('popup_opened');
   // document.body.style.overflow = '';
};
 
//  const closePopupByClickOverlay = function (event) {
//     if (event.target === event.currentTarget){
//        closePopup();
//     }
//  } 

/* Вывод элементов */
 initialCards.forEach((card) => {renderItem(card.link, card.name)});

function renderItem(link, name) {
const card = makeCard(link, name);
sectionElements.prepend(card);
};

/*Создание карточки */
function makeCard(link, name) {
   const clone = template.cloneNode(true);
   const photoItem = clone.querySelector('.element__image');
   const photoItemPopup = document.querySelector('.popup-photo__item');

   clone.querySelector('.element__title').textContent = name;
   photoItem.src = link;
   photoItem.alt = name;
/* Открытие фото */
   photoItem.addEventListener("click", () => {
      openPopup(popupOpenPhotoElement) 
      photoSubtitle.textContent = name;
      photoItemPopup.alt = name;
      photoItemPopup.src = link;
       });

   clone.querySelector('.element__delete').addEventListener('click', handleDelete);
   clone.querySelector('.element__icon').addEventListener('click', handleLike);

   return clone
}

/* Сохранение данных из формы на страницу */
function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.
   
   /* Вставляем новые значения с помощью textContent */
   userName.textContent = popupNameInputElement.value; 
   userJob.textContent = popupNameJobElement.value;
   closePopup(popupElement);
}

/* Добавление карточки */
const handleSubmit = (evt) => {
   evt.preventDefault();
   const valueLink = formInputUrl.value;
   const valueTitle = formInputTitle.value;
   renderItem(valueLink, valueTitle);
   closePopup(popupAddCardElement);
}

/* Удаление карточки */
function handleDelete (event) {
const card = event.target.closest('.element');
card.remove();
}

// evt = событие 
function handleLike (evt) {
   const likeButton = evt.target;
   likeButton.classList.toggle('element__icon_active');
}

/** Регистрируем обработчики событий */
popupOpenButtonElement.addEventListener("click", () => { 
   popupNameInputElement.value = userName.textContent;
   popupNameJobElement.value = userJob.textContent;
   openPopup(popupElement) });
addPopupElement.addEventListener("click", () => { openPopup(popupAddCardElement) });
popupClosePhotoElement.addEventListener("click", () => {closePopup(popupOpenPhotoElement) });
popupCloseButtonElement.addEventListener("click", () => {closePopup(popupElement)});
closePopupElement.addEventListener("click", () => {closePopup(popupAddCardElement)});
formElementAddCard.addEventListener('submit', (evt) => {handleSubmit(evt)});
formElement.addEventListener('submit', handleFormSubmit); 