import SmallInfoBlock from './small-info-block';
import styles from './ingredient-details.module.css';
import { FC } from 'react';

interface IIngredientDetails {
    name: string;
    image_large: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
}

const IngredientDetails: FC<IIngredientDetails> = (props) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } = props;
    return (
        <>
            <img alt={name} src={image_large} />
            <h3 className={`${styles.dish_name} text text_type_main-medium`}>{name}</h3>
            <div className={`${styles.info} mb-15`}>
                <SmallInfoBlock header="Калории,ккал" text={calories} />
                <SmallInfoBlock header="Белки, г" text={proteins} />
                <SmallInfoBlock header="Жиры, г" text={fat} />
                <SmallInfoBlock header="Углеводы, г" text={carbohydrates} />
            </div> 
        </>
    );
}



export default IngredientDetails;