import { combineReducers } from 'redux';
import { getData } from './get-data';
import { burgerConstructor } from './burger-constructor';
import { modalIngredient } from './modal-ingredient';
import { modalOrder } from './modal-order';


export const rootReducer = combineReducers({
    getData,
    burgerConstructor,
    modalIngredient,
    modalOrder
})

