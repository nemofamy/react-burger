import {
    AUTH_REQUEST,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,

} from '../actions/login';

const initialState = {
    request: false,
    failed: false,
    user: {
        email: '',
        name: ''
    }
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                request: true,
                failed: false
            };
        case AUTH_ERROR:
            return {
                ...state,
                request: false,
                failed: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                request: false,
                failed: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {
                    email: '',
                    name: ''
                },
                request: false,
                failed: false
            };

        default:
            return state;
    }
}