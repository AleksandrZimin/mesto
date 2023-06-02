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

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._values[input.name] = input.value;
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._handleSubmit(this._values);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
