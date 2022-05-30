import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from '../components/app/app.module.css';

const HomePage = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.app_main_content}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    );
}

export default HomePage;