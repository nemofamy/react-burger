import React, { useRef, FC } from 'react';
import { useDrop, useDrag } from "react-dnd";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT_IN_CONCTRUCTOR, CHANGE_ELEMENT_ORDER } from "../../services/actions/burger-constructor";
import { INGREDIENT_AMOUNT_DECREASE } from '../../services/actions/get-data';
import  styles  from './burger-card.module.css';

interface IElement {
    uuid: string;
    _id: string;
    name: string;
    price: number;
    image: string;
}

interface IBurgerCard {
    index: number;
    element: IElement;
}

const BurgerCard: FC<IBurgerCard> = (props) => {

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

    const [{ isHover }, drop] = useDrop({
        accept: 'constructorCard',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {
            const burgerCard = item as IBurgerCard;
            const dragIndex = burgerCard.index;
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

    const ref = useRef<HTMLElement>(null);
    const dragDropRef = drag(drop(ref));

    const onClick = (e: React.SyntheticEvent) => {
        const el = e.target as HTMLElement;
            if (
                el !== null && 
                el.parentElement !== null &&
                el.parentElement.parentElement !== null &&
                el.parentElement.parentElement.classList.contains('constructor-element__action')
            ) {
            dispatch({
                type: REMOVE_INGREDIENT_IN_CONCTRUCTOR,
                payload: e.currentTarget.id
            });

            const { _id } = e.currentTarget.attributes as NamedNodeMap & {
                _id: { value: string };
            };
            const { value } =  _id;
            dispatch({
                type: INGREDIENT_AMOUNT_DECREASE,
                payload: {
                    _id: value
                }
            });
        }
    }
    return (
        <div
            {...props.element}
            ref = {dragDropRef as React.LegacyRef<HTMLDivElement> | undefined}
            id={uuid}
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



export default BurgerCard;