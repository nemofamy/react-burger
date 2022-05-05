import { combineReducers } from 'redux';
import { getData } from './get-data';
import { burgerConstructor } from './burger-constructor';


export const rootReducer = combineReducers({
    getData,
    burgerConstructor
})

