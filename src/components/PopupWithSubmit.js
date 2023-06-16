import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(".form__button");
  }

  setSubmitHandler(newHandler) {
    this._submitHandler = newHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitHandler();
    });
  }

  formLoading(loading) {
    if (loading === true) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = "Да";
    }
  }
}
