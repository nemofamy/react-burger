import checkResponse from '../utilities/check-response';
import checkSuccess from '../utilities/check-success';
import { API_ADDRESS } from './get-data';
import { setCookie } from '../utilities/set-cookie';
import { getCookie } from '../utilities/get-cookie';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const patchUser = (name, email, password) => {
    return async (dispatch) => {
        dispatch({type: AUTH_REQUEST});
        try {
            const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
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
            dispatch({type: LOGOUT_SUCCESS});
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