export default class Card {
   constructor(initialCard, templateSelector, openPhoto) {
      this._initialCard = initialCard;
      this._templateSelector = templateSelector;
      this._openPhoto = openPhoto;
   }

   _getTemplate() {
      const cardElement = document
        .querySelector('.template')
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }

   _setEventListeners() {
      this._cardElement.querySelector('.element__image').addEventListener('click', () => {
         this._handleImageClick();
       });

      this._cardElement.querySelector('.element__delete').addEventListener('click', () => {
         this._handleDeleteClick();
       });

       this._cardElement.querySelector('.element__icon').addEventListener('click', () => {
         this._handleLikeClick();
       }); 
   }

  //  _handleCardClick(initialCard) {
  //     // открывает полноразмерное изображение
  //     const popupImage = document.querySelector('.popup__item');
  //           popupImage.src = initialCard.link;
  //           popupImage.alt = initialCard.name;
  //           document.querySelector('.popup__subtitle').textContent = initialCard.name;
  //           document.querySelector('.popup-photo').classList.add('popup_opened');

  //   }

  _handleImageClick () {
    openPhoto(this._initialCard.name, this._initialCard.link)
  }

  

   _handleDeleteClick() {
      // удаляет карточку
      this._cardElement.remove();
    }

   _handleLikeClick() {
      // добавляет/удаляет лайк
      this._cardElement.querySelector('.element__icon').classList.toggle('element__icon_active');
    }

    generateCard() {
      this._cardElement = this._getTemplate();
      this._cardElement.querySelector('.element__title').textContent = this._initialCard.name;
      this._cardElement.querySelector('.element__image').src = this._initialCard.link;
      this._cardElement.querySelector('.element__image').alt = this._initialCard.name;
  
      this._setEventListeners();
  
      return this._cardElement;
    }

    // getCardData() {
    //   return {
    //     name: this._initialCards.name,
    //     link: this._initialCards.link
    //   };
    // }
  
}

