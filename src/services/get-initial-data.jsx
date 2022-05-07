import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./actions/get-data.jsx";

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