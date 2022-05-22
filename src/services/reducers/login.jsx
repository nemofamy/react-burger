import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/login';

const initialState = {
    loginRequest: false,
    loginFailed: false,
    user: {
        email: '',
        name: ''
    },
    token: ''
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginRequest: true,
                loginFailed: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                token: action.payload.accessToken,
                loginRequest: false,
                loginFailed: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loginRequest: false,
                loginFailed: true
            };
        default:
            return state;
    }
}