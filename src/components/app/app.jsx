import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { getInitialData } from '../../services/get-initial-data';
import { useDispatch, useSelector } from 'react-redux';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getInitialData());
   },[dispatch]);

   const data = useSelector(store => store.data); 

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
