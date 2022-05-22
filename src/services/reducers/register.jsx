 import {
    REGISTER_ERROR,
    REGISTER_REQUEST
 } from '../actions/register';

 const initialState = {
     registerRequest: false,
     registerFailed: false
 }
 
 export const register = (state = initialState, action) => {
     switch (action.type) {
            case REGISTER_REQUEST:
                return {
                    ...state,
                    registerRequest: true,
                    registerFailed: false
                }
            case REGISTER_ERROR:
                return {
                    ...state,
                    registerRequest: false,
                    registerFailed: true
                }
         default:
             return state;
     }
 }