import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from "./actions";

const BURGER_API_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';

export const getInitialData = () => {
   return async (dispatch) => {
      dispatch({type: GET_DATA});
      try {
         const res = await fetch(BURGER_API_ADDRESS);
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
            dispatch({type: GET_DATA_FAILED});
            return Promise.reject(res);
         }
      } catch (err) {
         dispatch({type: GET_DATA_FAILED});
         console.log(`Что-то пошло не так: ${err}`); 
      }
   }
 }