import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { getInitialData } from '../../services/get-initial-data';
import { useDispatch } from 'react-redux';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getInitialData());
   },[dispatch]);

   return (
    <>
      <AppHeader activePage="Конструктор" />
      <main className={styles.app_main_content}>
         <BurgerIngredients />
         <BurgerConstructor />
      </main>
    </>
   );
}

export default App;
