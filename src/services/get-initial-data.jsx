import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, BUN_AMOUNT_CHANGE } from "./actions/get-data.jsx";

export const API_ADDRESS = 'https://norma.nomoreparties.space/api/';

export const getInitialData = () => {
   return async (dispatch) => {
      dispatch({type: GET_DATA_REQUEST});
      try {
         const res = await fetch(`${API_ADDRESS}ingredients`);
         if (res.ok) {
            const dataset = await res.json();
            if (dataset.success) {
               dispatch({
                  type: GET_DATA_SUCCESS,
                  payload: dataset.data
               });
               dispatch({
                  type: BUN_AMOUNT_CHANGE,
                  payload: {
                     _id: '60d3b41abdacab0026a733c6'
                  }
               });
            }
         } else {
            console.log('Неудачный запрос данных');
            dispatch({type: GET_DATA_ERROR});
            return Promise.reject(res);
         }
      } catch (err) {
         dispatch({type: GET_DATA_ERROR});
         console.log(`Что-то пошло не так: ${err}`); 
      }
   }
 }