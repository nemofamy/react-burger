import { INIT_DATA
 } from "./actions";
const BURGER_API_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';

export const getInitialData = () => {
   return async (dispatch) => {
      try {
         const res = await fetch(BURGER_API_ADDRESS);
         if (res.ok) {
            const dataset = await res.json();
            if (dataset.success) {
                dispatch({
                  type: INIT_DATA,
                  payload: dataset.data
               });
            }
         } else {
            console.log('Неудачный запрос данных');
            return Promise.reject(res);
         }
      } catch (err) {
         console.log(`Что-то пошло не так: ${err}`); 
      }
   }
 }