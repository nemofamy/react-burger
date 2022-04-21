import React from 'react';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item/ingredient-item';


import styles from './burger-ingredients.module.css';

function BurgerIngredients (props) {

    const [current, setCurrent] = React.useState('bun');

    return(
        <section className={styles.wrap}>
            <h1 className={`${styles.main_header} text text_type_main-large`}>Соберите бургер</h1>
            <div className={styles.tab_bar}>
                <Tab value="bun" active={current === 'bun'}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'}>
                    Начинки
                </Tab> 
            </div>
            <section className={styles.dishtype_section}>
                <h3 id="bun" className={`${styles.section_header} text text_type_main-medium`}>Булки</h3>
                {props.data.map((ingredient, index)=>(
                    ingredient.type === "bun" &&
                        <IngredientItem 
                            name={ingredient.name} 
                            key={index} 
                            img={ingredient.image} 
                            cost={ingredient.price} 
                            __v={ingredient.__v}/>
                ))}
            </section>
            <section className={styles.dishtype_section}>
                <h3 id="sauce" className={`${styles.section_header} text text_type_main-medium`}>Соусы</h3>
                {props.data.map((ingredient, index)=>(
                    ingredient.type === "sauce" &&
                        <IngredientItem 
                            name={ingredient.name} 
                            key={index} 
                            img={ingredient.image} 
                            cost={ingredient.price} 
                            __v={ingredient.__v}/>
                ))}
            </section>
            <section className={styles.dishtype_section}>
                <h3 id="main" className={`${styles.section_header} text text_type_main-medium`}>Начинки</h3>
                {props.data.map((ingredient, index)=>(
                    ingredient.type === "main" &&
                        <IngredientItem 
                            name={ingredient.name} 
                            key={index} 
                            img={ingredient.image} 
                            cost={ingredient.price} 
                            __v={ingredient.__v}/>
                ))}
            </section>
        </section>
    );
}

export default BurgerIngredients;