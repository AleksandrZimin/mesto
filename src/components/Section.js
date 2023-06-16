export default class Section {
  constructor(renderer, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  rendererElement(card) {
    this._container.prepend(card);
  }

  rendererElements(cards) {
    cards.reverse().forEach(this._renderer);
  }
}
