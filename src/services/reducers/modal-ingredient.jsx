import { OPEN_INGREDIENT_MODAL, CLOSE_INGREDIENT_MODAL } from "../actions/modal_ingredient";

const initialState = {
    data: {},
    isVisible: false
}

export const modalIngredient = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INGREDIENT_MODAL:
            return {
                data: action.paiload.props.dataset,
                isVisible: true
            };
        case CLOSE_INGREDIENT_MODAL:
            return {
               data: {},
               isVisible: false
            };    
        default:
            return state;
    }
}