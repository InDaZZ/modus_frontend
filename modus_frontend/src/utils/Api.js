export default class Api {
    constructor({ url, headers }) {
        this.url = url;
        this.bas_url = "http://localhost:3000";
        this.headers = headers;
    }
    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return res.text().then((text) => {
            throw JSON.parse(text).message || JSON.parse(text).error;
        });
    }

    register() {
        return fetch(this.url + '/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse)
    };

    rollGet() {
        return fetch(this.url + '/allroll', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse)
    };

    pizzaGet() {
        return fetch(this.url + '/allpizza', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse)
    };
    anonimOrderCreate({ order, phone, owner }) {

        return fetch(this.url + '/order', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ products: order, phone: phone, owner:owner })
        })
            .then(this._handleResponse)
    }
}

export const api = new Api({
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    }
});