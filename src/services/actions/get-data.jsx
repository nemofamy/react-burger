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