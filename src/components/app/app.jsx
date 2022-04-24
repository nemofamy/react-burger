import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';


const BURGER_API_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';


function App() {
   const [data, setData] = React.useState([]);

   React.useEffect(() => {
      const getData = async () => {
         try {
            const res = await fetch(BURGER_API_ADDRESS);
            if (res.ok) {
               const dataset = await res.json();
               if (dataset.success) {
                  setData(dataset.data);
               }
            } else {
               console.log('Неудачный запрос данных');
               return Promise.reject(res);
            }
         } catch (err) {
            console.log(`Что-то пошло не так: ${err}`);
         }
      }
      getData();
      
   },[]);

   return (
    <>
      <AppHeader activePage="Конструктор" />
      <main className={styles.app_main_content}>
         <BurgerIngredients data={data} />
         <BurgerConstructor data={data} />
      </main>
    </>
   );
}

export default App;
