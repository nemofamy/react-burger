import { API_ADDRESS } from "./get-data";
import _checkResponse from "../utilities/check-response";

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';

const getOrderData = (constructorData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ORDER_NUMBER_REQUEST});
        try {
            const res = await fetch(`${API_ADDRESS}orders`, {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(
                   { 
                      "ingredients": constructorData 
                   }
                )
             });       
            const dataset = await _checkResponse(res);
            if (dataset.success) {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    payload: dataset.order.number
                });
            }
        } catch (err) {
            dispatch({type: GET_ORDER_NUMBER_FAILED});
            console.log(`Что-то пошло не так: ${err}`); 
      }
    }
}

export default getOrderData;