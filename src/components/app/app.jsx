import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { getInitialData } from '../../services/get-initial-data';
import { useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getInitialData());
   },[dispatch]);

   return (
    <>
      <AppHeader activePage="Конструктор" />
      <DndProvider backend={HTML5Backend}>
         <main className={styles.app_main_content}>
            <BurgerIngredients />
            <BurgerConstructor />
         </main>
      </DndProvider>
    </>
   );
}

export default App;
