import IngredientItem from './ingredient-item';
import { useSelector } from 'react-redux';
import styles from './ingredients-section.module.css';
import PropTypes from 'prop-types';

function IngredientsSection(props) {
    const { refName, name, categoryId } = props;
    const data = useSelector(store => store.getData.data);

    return (
        <section className={`${styles.dishtype_section} pb-10`} ref={refName}>
            <h3 id={categoryId} className={`${styles.section_header} text text_type_main-medium`}>{name}</h3>
            { 
                data.map((ingredient) =>
                (ingredient.type === categoryId && <IngredientItem key={ingredient._id} dataset={ingredient}/>))
            }
        </section>
    );
}

IngredientsSection.propTypes = {
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    refName: PropTypes.object.isRequired
}

export default IngredientsSection;