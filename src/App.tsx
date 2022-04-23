import React from 'react';
import { setConstantValue } from 'typescript';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';


const BURGER_API_ADDRESS = 'https://norma.nomoreparties.space/api/ingredients';


function App() {
   const [data, setData] = React.useState([]);

   React.useEffect(() => {
      const getData = async () => {
         try {
            const res = await fetch(BURGER_API_ADDRESS);
            const dataset = await res.json();
            if (dataset.success) {
               setData(dataset.data);
            }
         } catch (err) {
            console.log(`Что-то пошло не так: ${err}`);
         }
      }
      getData();
   },[]);

   return (
    <div className="App">

      <AppHeader activePage="Конструктор" />
      <main className="App-main-content">
         <BurgerIngredients data={data} />
         <BurgerConstructor data={data} />
      </main>
    </div>
   );
}

export default App;
