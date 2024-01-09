class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }
  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Произошла ошибка: ${response.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }

  register(data) {
    return this._request(`${this._baseUrl}signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  }

  login(data) {
    return this._request(`${this._baseUrl}signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    });
  }

  checkToken(jwt) {
    return this._request(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
  }
}

export const auth = new Auth({
  baseUrl: "https://api.evgenia.nomoredomainsmonster.ru/",
});
