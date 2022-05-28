import IngredientDetails from '../components/modals/ingredient-details';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './ingredient-page.module.css';


const IngredientPage = () => {
    const dataRequest = useSelector(store => store.auth.request);
    const params = useParams();
    const ingredientId = params.id.split(':')[1];
    const ingredientsData = useSelector(store => store.getData.data);
    const item = ingredientsData.filter(item => item._id === ingredientId)[0];

    if (!item) {
        return (
            <>  
                { dataRequest && <h1>Секундочку...</h1>}
                { !dataRequest && <h1>Такого ингредиента не нашлось</h1>}
            </>
        );
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.ingredient}>
                <h1>Детали ингредиента</h1>
                <IngredientDetails name={item.name} 
                                image_large={item.image_large} 
                                calories={item.calories} 
                                proteins={item.proteins} 
                                fat={item.fat} 
                                carbohydrates={item.carbohydrates}/>
            </div>
        </div>
    );
}

export default IngredientPage;