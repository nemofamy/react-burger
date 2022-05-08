import checkResponse from "../utilities/check-response";
import checkSuccess from "../utilities/check-success";

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const INGREDIENT_AMOUNT_INCREASE = 'INGREDIENT_AMOUNT_INCREASE';
export const INGREDIENT_AMOUNT_DECREASE = 'INGREDIENT_AMOUNT_DECREASE';
export const BUN_AMOUNT_CHANGE = 'BUN_AMOUNT_CHANGE';

export const API_ADDRESS = 'https://norma.nomoreparties.space/api/';

export const getInitialData = () => {
   return async (dispatch) => {
      dispatch({type: GET_DATA_REQUEST});
      try {
        const res = await fetch(`${API_ADDRESS}ingredients`);
        const dataset = await checkResponse(res).json();
        if (checkSuccess(dataset)) {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: dataset.data
            });
        }
      } catch (err) {
        dispatch({type: GET_DATA_ERROR});
        console.log(`Что-то пошло не так: ${err}`); 
      }
   }
 }