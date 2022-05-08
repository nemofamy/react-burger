const  checkResponse = (res) => {
    if (res.ok) return res;
    return Promise.reject(`Ошибка ${res.status}`);
}

export default checkResponse;