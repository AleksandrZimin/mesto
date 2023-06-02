export default class Card {
  constructor(initialCard, templateSelector, openPhoto) {
    this._initialCard = initialCard;
    this._templateSelector = templateSelector;
    this._openPhoto = openPhoto;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._likeButton.addEventListener("click", () => {
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

  _handleImageClick() {
    this._openPhoto(this._initialCard.name, this._initialCard.link);
  }

  _handleDeleteClick() {
    // удаляет карточку
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeClick() {
    // добавляет/удаляет лайк
    this._likeButton.classList.toggle("element__icon_active");
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".element__title").textContent =
      this._initialCard.name;
    this._cardElement.querySelector(".element__image").src =
      this._initialCard.link;
    this._cardElement.querySelector(".element__image").alt =
      this._initialCard.name;
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._deleteButton = this._cardElement.querySelector(".element__delete");
    this._likeButton = this._cardElement.querySelector(".element__icon");

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
