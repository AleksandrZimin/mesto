export const albrus = new URL("../images/albrus.jpg", import.meta.url);
export const avatar = new URL("../images/card.png", import.meta.url);
export const card = new URL("../images/Avatar.png", import.meta.url);
export const closeIcon = new URL("../images/Close-Icon.svg", import.meta.url);
export const dombay = new URL("../images/dombay.jpg", import.meta.url);
export const deleteSVG = new URL("../images/delete.svg", import.meta.url);
export const editButton = new URL("../images/Edit-Button.svg", import.meta.url);
export const group = new URL("../images/Group.svg", import.meta.url);
export const heartBlack = new URL("../images/heart-black.svg", import.meta.url);
export const karachaevsk = new URL(
  "../images/karachaevsk.jpg",
  import.meta.url
);
export const logo = new URL("../images/logo.svg", import.meta.url);
export const vector = new URL("../images/Vector(1).svg", import.meta.url);
export const avatarRedactor = new URL(
  "../images/avatar-hover.svg",
  import.meta.url
);

export const interBlack = new URL(
  "../fonts//Inter/Inter-Black.woff",
  import.meta.url
);
export const interBlack2 = new URL(
  "../fonts//Inter/Inter-Black.woff2",
  import.meta.url
);
export const interMedium = new URL(
  "../fonts//Inter/Inter-Medium.woff",
  import.meta.url
);
export const interMedium2 = new URL(
  "../fonts//Inter/Inter-Medium.woff2",
  import.meta.url
);
export const interRegular = new URL(
  "../fonts//Inter/Inter-Regular.woff",
  import.meta.url
);
export const interRegular2 = new URL(
  "../fonts//Inter/Inter-Regular.woff2",
  import.meta.url
);

export const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "albrus", link: albrus },
  { name: "avatar", link: avatar },
  { name: "card", link: card },
  { name: "closeIcon", link: closeIcon },
  { name: "deleteSVG", link: deleteSVG },
  { name: "dombay", link: dombay },
  { name: "group", link: group },
  { name: "editButton", link: editButton },
  { name: "heartBlack", link: heartBlack },
  { name: "karachaevsk", link: karachaevsk },
  { name: "logo", link: logo },
  { name: "vector", link: vector },
  { name: "interBlack", link: interBlack },
  { name: "interBlack2", link: interBlack2 },
  { name: "interMedium", link: interMedium },
  { name: "interMedium2", link: interMedium2 },
  { name: "interRegular", link: interRegular },
  { name: "interRegular2", link: interRegular2 },
  { name: "avatarRedactor", link: avatarRedactor },
];

export const initialCards = [
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

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_error",
  errorClass: "popup-error_visible",
};
