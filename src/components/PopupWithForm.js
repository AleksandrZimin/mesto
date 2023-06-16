import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".form");
    this._inputs = this._popup.querySelectorAll(".form__input");
    this._button = this._popup.querySelector(".form__button");
    this._values = {};
  }

  get inputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this.inputValues);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  formLoading(loading) {
    if (loading === true) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = "Сохранить";
    }
  }
}
