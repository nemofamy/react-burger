import checkResponse from '../utilities/check-response';
import checkSuccess from '../utilities/check-success';
import API_ADDRESS from './get-data';
import { setCookie } from '../utilities/set-cookie';
import {useNavigate} from 'react-router-dom';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = (email, password) => {
    const navigate = useNavigate();
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
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
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: dataset
                });
                const authToken = dataset.accessToken.split('Bearer ')[1];
                setCookie('token', authToken);
                
            }
        } catch (err) {
            dispatch({type: LOGIN_ERROR});
            console.error(`Что-то пошло не так: ${err}`);
        }
    }
}