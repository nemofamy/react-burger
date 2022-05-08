import { API_ADDRESS } from "./get-data";

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
            if (res.ok) {
                const dataset = await res.json();
                if (dataset.success) {
                    dispatch({
                        type: GET_ORDER_NUMBER_SUCCESS,
                        payload: dataset.order.number
                    });
                } else {
                    console.log('Неудачный запрос данных');
                    dispatch({type: GET_ORDER_NUMBER_FAILED});
                    return Promise.reject(res);
                }
            }
        } catch (err) {
            dispatch({type: GET_ORDER_NUMBER_FAILED});
            console.log(`Что-то пошло не так: ${err}`); 
      }
    }
}

export default getOrderData;