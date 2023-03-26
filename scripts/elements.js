







/*Функция открытия просмотра изображения карточки*/
// const openPopupImage = function(name, link) {
//     popupPictureFillImage.scr = link;
//     popupPictureFillTitle.textContent = name;
//     popupPictureFillImage.alt = name;
//     openPopup(popupPicture);
// }

// /*Активный лайк*/
// function activeLikeClass(evt) {
//     evt.target.classList.toggle('element__like-btn_active');
// };

// /*Удаление карточки*/
// function cardDelete(evt) {
//     const card = evt.target.closest('.element');
//     card.remove();
// };

/*Шаблон создания карточки*/
// function createNewCard (name, link) {
//     const cardElement = template.querySelector('.element').cloneNode(true);
//     const popupCardTitle = cardElement.querySelector('.element__title');
//     const popupCardLink = cardElement.querySelector('.element__pic');
//     const elementCardBtnLike = cardElement.querySelector('.element__like-btn');
//     const elementCardBtnDelete = cardElement.querySelector('.element__delete-btn');

//     popupCardTitle.textContent = name;
//     popupCardLink.scr = link;
//     popupCardLink.alt = name;
//     elementCardBtnLike.addEventListener('click', activeLikeClass);
//     elementCardBtnDelete.addEventListener('click', cardDelete);
//     popupCardLink.addEventListener('click', () => openPopupImage(name, link))
//     return cardElement;
// }

/*Создание карточек из массива*/
// initialCards.forEach(function(name, link) {
//     sectionElements.append(createNewCard (name, link));
// });

/*Создание карточек от пользователя*/
// function renderCard(data) {
//     sectionElements.prepend(data);
// };

// function handleNewCard(evt) {
//     evt.preventDefault();
//     const newCard = cardNewCreate({link: formInputUrl.value, name: formInputTitle.value});
//     evt.target.reset();
//     closePopup2(popupCards);
// };

// popupFormCards.addEventListener('submit', handleNewCard);