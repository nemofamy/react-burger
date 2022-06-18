import IngredientItem from './ingredient-item';
import { useSelector } from 'react-redux';
import styles from './ingredients-section.module.css';
import { FC } from 'react';
import { IIngedientShape } from '../../utils/types';

interface IIngredientsSection {
    name: string;
    categoryId: string;
    refName: object;
};

const IngredientsSection: FC<IIngredientsSection> = (props) => {
    const { refName, name, categoryId } = props;
    const storeData = useSelector<any>(store => store.getData.data);
    const data = storeData as Array<IIngedientShape>;

    return (
        <section className={`${styles.dishtype_section} pb-10`} ref={refName as React.LegacyRef<HTMLElement> | undefined}>
            <h3 id={categoryId} className={`${styles.section_header} text text_type_main-medium`}>{name}</h3>
            {   
                
                data.map((ingredient) =>
                (ingredient.type === categoryId && <IngredientItem key={ingredient._id} dataset={ingredient}/>))
            }
        </section>
    );
}

export default IngredientsSection;