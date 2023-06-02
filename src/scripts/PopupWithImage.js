import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoSubtitle = this._popup.querySelector(".popup__subtitle");
    this._photoItemPopup = this._popup.querySelector(".popup__item");
  }

  open(name, link) {
    this._photoItemPopup.src = link;
    this._photoSubtitle.textContent = name;
    this._photoItemPopup.alt = name;
    super.open();
  }
}
