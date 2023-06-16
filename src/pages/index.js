import "../pages/index.css";
import * as constants from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import API from "../components/API.js";
import Popup from "../components/Popup";
import PopupWithSubmit from "../components/PopupWithSubmit";

/* Делаем выборку DOM элементов */
const profilePopup = document.querySelector(".profile-popup");
const popupOpenButtonElement = document.querySelector(".profile__button");
const formElementProfile = document.querySelector(".form_type_profile");
const formElementAddCard = document.querySelector(".form_type_addCard");
const formElementUpdateAvatar = document.querySelector(
  ".form_type_updateAvatar"
);
const buttonAddCard = document.querySelector(".profile__add-button");
const popupNameInputElement = profilePopup.querySelector(
  ".form__input_place_name"
);
const profilePhoto = document.querySelector(".profile__avatar-button");
const popupNameJobElement = profilePopup.querySelector(
  ".form__input_place_job"
);
const popupApprovalForm = document.querySelector(".form_type_approval");

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileJob: ".profile__job",
  avatar: ".profile__avatar",
});

const api = new API("https://nomoreparties.co/v1/cohort-68/", {
  authorization: "6eb5f56d-c7f7-420d-b711-710bf1c16703",
  "Content-Type": "application/json",
});

let id;

Promise.all([api.getCard(), api.getUserInfo()]).then(
  ([elements, userInfomation]) => {
    const { name, about, avatar, _id } = userInfomation;
    id = _id;
    userInfo.setUserInfo({
      name,
      job: about,
      avatar,
    });
    cards.rendererElements(elements);
  }
);

/* Валидация формы*/

const profileValidator = new FormValidator(
  constants.validationConfig,
  formElementProfile
);

const cardValidator = new FormValidator(
  constants.validationConfig,
  formElementAddCard
);

const avatarValidator = new FormValidator(
  constants.validationConfig,
  formElementUpdateAvatar
);

profileValidator.enableValidation();
cardValidator.enableValidation(); // Вызов функции валидации
avatarValidator.enableValidation();

const cards = new Section((item) => {
  const card = createCard(item);
  cards.rendererElement(card);
}, ".elements");

const imagePopup = new PopupWithImage(".popup-photo");
imagePopup.setEventListeners();

const cardPopup = new PopupWithForm(".card-popup", handleAddCard);
cardPopup.setEventListeners();
const profPopup = new PopupWithForm(".profile-popup", handleUserUpdate);
profPopup.setEventListeners();
const popupAvatar = new PopupWithForm(".popup-avatar", handleUpdateAvatar);
popupAvatar.setEventListeners();
const popupApproval = new PopupWithSubmit(".popup-approval");
popupApproval.setEventListeners();

function handleUpdateAvatar(inputValues) {
  popupAvatar.formLoading(true);
  api
    .updateAvatar(inputValues)
    .then(({ name, about, avatar }) => {
      userInfo.setUserInfo({ name, job: about, avatar });
      popupAvatar.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupAvatar.formLoading(false));
}

/* Сохранение данных из формы на страницу */
function handleUserUpdate(values) {
  profPopup.formLoading(true);
  api
    .editProfile(values)
    .then(({ name, about, avatar }) => {
      userInfo.setUserInfo({
        name,
        job: about,
        avatar,
      });
      profPopup.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => profPopup.formLoading(false));
}

const createCard = (cardData) => {
  const card = new Card(
    cardData,
    ".template",
    () => {
      imagePopup.open(cardData);
    },
    id,
    handleLike,
    handleDeleteClick
  );
  return card.generateCard();
};

function handleDeleteClick(card, cardId) {
  popupApproval.open();
  popupApproval.setSubmitHandler(() => {
    popupApproval.formLoading(true);
    api
      .deleteCard(cardId)
      .then((res) => {
        card.deleteCard();
        popupApproval.close();
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => popupApproval.formLoading(false));
  });
}

/* Добавление карточки */
function handleAddCard(values) {
  cardPopup.formLoading(true);
  api
    .addNewCard({ name: values.title, link: values.url })
    .then((res) => {
      const cardElement = createCard(res);
      cards.rendererElement(cardElement);
      cardValidator.disableButton();
      cardPopup.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => cardPopup.formLoading(false));
}

/* Регистрируем обработчики событий */
popupOpenButtonElement.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  popupNameInputElement.value = currentUser.name;
  popupNameJobElement.value = currentUser.job;
  profileValidator.resetForm();
  profileValidator.disableButton();
  profPopup.open();
});

buttonAddCard.addEventListener("click", () => {
  cardPopup.open();
});

function handleLike(card, id) {
  const likeAction = card.cardLiked() ? api.removeLike(id) : api.addLike(id);

  likeAction
    .then((res) => {
      card.updateLikes(res.likes);
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
}

profilePhoto.addEventListener("click", () => {
  popupAvatar.open();
});
