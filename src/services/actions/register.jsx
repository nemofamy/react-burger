import { API_ADDRESS } from './get-data';
import checkResponse from '../utilities/check-response';
import checkSuccess from '../utilities/check-success';
import { LOGIN_SUCCESS } from './login';
import { setCookie } from '../utilities/set-cookie';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const registerRequest = (name, email, password) => {
    return async (dispatch) => {
        dispatch({type: REGISTER_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}auth/register`, {
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
                    'password': password,
                    'name': name
                })
            });
            const dataset = await checkResponse(res).json();
            if (checkSuccess(dataset)) {
                const authToken = dataset.accessToken.split('Bearer ')[1];
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        ...dataset,
                        accessToken: authToken
                    }
                });
                setCookie('token', authToken);
            }

        } catch (err) {
            dispatch({type: REGISTER_ERROR});
            console.error('Ошибка регистрации: ', err);
        }
    }
}