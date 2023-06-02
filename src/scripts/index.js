import "../pages/index.css";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const albrus = new URL("../images/albrus.jpg", import.meta.url);
const Avatar = new URL("../images/card.png", import.meta.url);
const card = new URL("../images/Avatar.png", import.meta.url);
const CloseIcon = new URL("../images/Close-Icon.svg", import.meta.url);
const dombay = new URL("../images/dombay.jpg", import.meta.url);
const deleteSVG = new URL("../images/delete.svg", import.meta.url);
const EditButton = new URL("../images/Edit-Button.svg", import.meta.url);
const Group = new URL("../images/Group.svg", import.meta.url);
const heartBlack = new URL("../images/heart-black.svg", import.meta.url);
const karachaevsk = new URL("../images/karachaevsk.jpg", import.meta.url);
const logo = new URL("../images/logo.svg", import.meta.url);
const Vector = new URL("../images/Vector(1).svg", import.meta.url);

const InterBlack = new URL("../fonts//Inter/Inter-Black.woff", import.meta.url);
const InterBlack2 = new URL(
  "../fonts//Inter/Inter-Black.woff2",
  import.meta.url
);
const InterMedium = new URL(
  "../fonts//Inter/Inter-Medium.woff",
  import.meta.url
);
const InterMedium2 = new URL(
  "../fonts//Inter/Inter-Medium.woff2",
  import.meta.url
);
const InterRegular = new URL(
  "../fonts//Inter/Inter-Regular.woff",
  import.meta.url
);
const InterRegular2 = new URL(
  "../fonts//Inter/Inter-Regular.woff2",
  import.meta.url
);

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "albrus", link: albrus },
  { name: "Avatar", link: Avatar },
  { name: "card", link: card },
  { name: "CloseIcon", link: CloseIcon },
  { name: "deleteSVG", link: deleteSVG },
  { name: "dombay", link: dombay },
  { name: "Group", link: Group },
  { name: "EditButton", link: EditButton },
  { name: "heartBlack", link: heartBlack },
  { name: "karachaevsk", link: karachaevsk },
  { name: "logo", link: logo },
  { name: "Vector", link: Vector },
  { name: "InterBlack", link: InterBlack },
  { name: "InterBlack2", link: InterBlack2 },
  { name: "InterMedium", link: InterMedium },
  { name: "InterMedium2", link: InterMedium2 },
  { name: "InterRegular", link: InterRegular },
  { name: "InterRegular2", link: InterRegular2 },
];

const initialCards = [
  {
    name: "Архыз",
    link: "https://images.unsplash.com/photo-1679095007377-e6c8e13f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Челябинская область",
    link: "https://images.unsplash.com/photo-1679530987837-6b1d9b660d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Иваново",
    link: "https://images.unsplash.com/photo-1679239235604-34809f02e2cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Камчатка",
    link: "https://images.unsplash.com/photo-1678938940744-0fc1c7953b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Холмогорский район",
    link: "https://images.unsplash.com/photo-1679267207806-53137718141b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Байкал",
    link: "https://images.unsplash.com/photo-1679564881633-fc8ef0c9c07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_error",
  errorClass: "popup-error_visible",
};

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
  validationConfig,
  formElementProfile
);

const cardValidator = new FormValidator(validationConfig, formElementAddCard);
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

cards.rendererElements(initialCards);
