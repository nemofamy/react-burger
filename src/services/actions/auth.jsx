import checkResponse from '../utilities/check-response';
import checkSuccess from '../utilities/check-success';
import { API_ADDRESS } from './get-data';
import { setCookie } from '../utilities/set-cookie';
import { getCookie } from '../utilities/get-cookie';
import { deleteCookie } from '../utilities/delete-cookie';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GET_USER_DATA = 'GET_USER_DATA';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const TOKEN_UPDATE_SUCCESS ='TOKEN_UPDATE_SUCCESS';

export const tokenUpdate = () => {
    return async (dispatch) => {
        console.log('tokenUpdate');
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}auth/login`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'token': getCookie('refreshToken')
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                const authToken = dataset.accessToken.split('Bearer ')[1];
                dispatch({
                    type: TOKEN_UPDATE_SUCCESS,
                    payload: dataset
                });
                setCookie('refreshToken', dataset.refreshToken);
                setCookie('token', authToken);
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка при обновлении токена: ${err}`);
        }
    }
}

export const passwordResetStep2 = (password, token) => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}password-reset`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'password': password,
                    'token': token
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                dispatch({ type: PASSWORD_RESET_SUCCESS });
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка при сбросе пароля (шаг 2): ${err}`);
        }
    }
}

export const passwordReset = (value) => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}password-reset`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'email': value
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                dispatch({ type: PASSWORD_RESET_SUCCESS });
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка при сбросе пароля: ${err}`);
        }
    }
}

export const getUserData = () => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            await tokenUpdate();
            const res = await fetch(`${API_ADDRESS}auth/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getCookie('token')
                },
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: dataset
                });
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка получения данных пользователя: ${err}`);
        }
    }
}
export const patchUser = (name, email, password) => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}auth/user`, {
                method: 'PATCH',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getCookie('token')
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: dataset
                });
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка обновления данных: ${err}`);
        }
    }
}

export const logoutRequest = () => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}auth/logout`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'token': getCookie('refreshToken')
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                dispatch({type: LOGOUT_SUCCESS});
                deleteCookie('refreshToken');
                deleteCookie('token');
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка разлогирования: ${err}`);
        }
    }
}

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}auth/login`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                const authToken = dataset.accessToken.split('Bearer ')[1];
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: dataset
                });
                setCookie('refreshToken', dataset.refreshToken);
                setCookie('token', authToken);
            }
        } catch (err) {
            dispatch({type: AUTH_ERROR});
            console.error(`Ошибка при попытке входа: ${err}`);
        }
    }
}

