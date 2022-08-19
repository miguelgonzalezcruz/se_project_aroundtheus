// Server information Project 9.
// Token: f0f5b035-9e61-4cc2-926f-83804fb546a7
// Group ID: group-12

class Api {
  constructor(info) {
    this._url = info.url;
    this._headers = info.headers;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }

  editUserPicture(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  postNewCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }
  addNewLikes(cardId) {
    return fetch(this._url + "/cards/likes/" + cardId, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeNewLikes(cardId) {
    return fetch(this._url + "/cards/likes/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this._url + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export default Api;
