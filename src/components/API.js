export default class API {
  constructor(baseUrl, header) {
    this.baseUrl = baseUrl;
    this.header = header;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}users/me`, {
      headers: this.header,
    }).then((res) => this._checkResponse(res));
  }

  getCard() {
    return fetch(`${this.baseUrl}cards`, {
      headers: this.header,
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  editProfile({ name, job }) {
    return fetch(`${this.baseUrl}users/me`, {
      method: "PATCH",
      headers: this.header,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard(card) {
    return fetch(`${this.baseUrl}cards`, {
      method: "POST",
      headers: this.header,
      body: JSON.stringify(card),
    }).then((res) => this._checkResponse(res));
  }

  removeLike(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.header,
    }).then((res) => this._checkResponse(res));
  }

  addLike(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.header,
    }).then((res) => this._checkResponse(res));
  }

  updateAvatar({ avatar }) {
    return fetch(`${this.baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this.header,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this.header,
    }).then((res) => this._checkResponse(res));
  }
}
