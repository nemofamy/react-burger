import SmallInfoBlock from './small-info-block';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
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

IngredientDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired
}

export default IngredientDetails;