const  _checkResponse = (res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
}

export default _checkResponse;