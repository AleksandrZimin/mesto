export default class Card {
  constructor(
    cardData,
    templateSelector,
    openPhoto,
    id,
    handleLike,
    handleDeleteClick
  ) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._openPhoto = openPhoto;
    this._id = id;
    this._likes = cardData.likes;
    this._handleLike = handleLike;
    this._handleDeleteClick = handleDeleteClick;
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

    if (this.cardOwner() === true) {
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteClick(this, this._cardData._id);
      });
    }

    this._likeButton.addEventListener("click", () => {
      this._handleLike(this, this._cardData._id);
    });
  }

  _handleImageClick() {
    this._openPhoto(this._cardData.name, this._cardData.link);
  }

  deleteCard() {
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
      this._cardData.name;
    this._cardElement.querySelector(".element__image").src =
      this._cardData.link;
    this._cardElement.querySelector(".element__image").alt =
      this._cardData.name;
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._deleteButton = this._cardElement.querySelector(".element__delete");
    if (this.cardOwner() === false) {
      this._deleteButton.remove();
    }
    this._likeButton = this._cardElement.querySelector(".element__icon");
    this.updateLikes(this._likes);
    this._setEventListeners();

    return this._cardElement;
  }

  cardLiked() {
    return this._likes.some((user) => user._id === this._id);
  }

  updateLikes(likes) {
    this._likes = likes;
    this._cardElement.querySelector(".element__number").textContent =
      likes.length;
    if (this.cardLiked()) {
      this._likeButton.classList.add("element__icon_active");
    } else {
      this._likeButton.classList.remove("element__icon_active");
    }
  }

  cardOwner() {
    return this._cardData.owner._id === this._id;
  }
}
