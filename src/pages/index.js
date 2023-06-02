import "../pages/index.css";
import * as constants from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

/* Делаем выборку DOM элементов */
const profilePopup = document.querySelector(".profile-popup");
const popupOpenButtonElement = document.querySelector(".profile__button");
const formElementProfile = document.querySelector(".form_type_profile");
const formElementAddCard = document.querySelector(".form_type_addCard");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupNameInputElement = profilePopup.querySelector(
  ".form__input_place_name"
);
const popupNameJobElement = profilePopup.querySelector(
  ".form__input_place_job"
);

const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__job");
/* Получение кнопок для валидации формы*/
const profileValidator = new FormValidator(
  constants.validationConfig,
  formElementProfile
);

const cardValidator = new FormValidator(
  constants.validationConfig,
  formElementAddCard
);
profileValidator.enableValidation();
cardValidator.enableValidation(); // Вызов функции валидации

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileJob: ".profile__job",
});

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

/* Сохранение данных из формы на страницу */
function handleUserUpdate(values) {
  /* Вставляем новые значения с помощью textContent */
  userInfo.setUserInfo(values);
  profPopup.close();
}

const createCard = ({ name, link }) => {
  const card = new Card({ name, link }, ".template", () => {
    imagePopup.open(name, link);
  });
  return card.generateCard();
};

/* Добавление карточки */
function handleAddCard(values) {
  const cardElement = createCard({ name: values.title, link: values.url });
  cards.rendererElement(cardElement);
  cardValidator.disableButton();
  cardPopup.close();
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

cards.rendererElements(constants.initialCards);
