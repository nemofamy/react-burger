import { useRef } from 'react';
import { useDrop, useDrag } from "react-dnd";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT_IN_CONCTRUCTOR, CHANGE_ELEMENT_ORDER } from "../../services/actions/burger-constructor";
import { INGREDIENT_AMOUNT_DECREASE } from '../../services/actions/get-data';
import  styles  from './burger-card.module.css';
import PropTypes from 'prop-types';

function BurgerCard(props) {

    const index = props.index;
    const { uuid, _id, name, price, image } = props.element;
    
    const dispatch = useDispatch();

    const [{ isDrag }, drag] = useDrag({
        type: 'constructorCard',
        item: { index, uuid, _id, name, price, image },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const [{isHover}, drop] = useDrop({
        accept: 'constructorCard',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop (item) {
            const dragIndex = item.index
            const hoverIndex = index;
                dispatch({
                        type: CHANGE_ELEMENT_ORDER,
                        payload: {
                            dragIndex,
                            hoverIndex
                        }
                    });
        }
    });

    const ref = useRef(null);
    const dragDropRef = drag(drop(ref));

    const onClick = (e) => {
        if (e.target.parentElement.parentElement.classList.contains('constructor-element__action')) {
            dispatch({
                type: REMOVE_INGREDIENT_IN_CONCTRUCTOR,
                payload: e.currentTarget.id
            });
            dispatch({
                type: INGREDIENT_AMOUNT_DECREASE,
                payload: {
                    _id: e.currentTarget.attributes._id.value
                }
            });
        }

    }
    return (
        <div 
            ref={dragDropRef}
            id={uuid} 
            _id={_id} 
            className={`${styles.burger_element} ${ isDrag && styles.draging_card}`} 
            onClick={onClick} 
            draggable>
            <DragIcon type="primary" />
            <div className={`${styles.card_wrap} ${isHover && styles.hover_card}`}>
                <ConstructorElement text={name} price={price} thumbnail={image} />
            </div>
        </div>
    );
}

BurgerCard.propTypes = {
    index: PropTypes.number.isRequired,
    element: PropTypes.shape({
        uuid: PropTypes.string.isRequired, 
        _id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        price: PropTypes.number.isRequired, 
        image: PropTypes.string.isRequired
    })
}

export default BurgerCard;