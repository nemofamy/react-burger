import { 
    ADD_INGREDIENT_IN_CONSTRUCTOR, 
    REMOVE_INGREDIENT_IN_CONCTRUCTOR,
    BUN_SELECTOR
} from "../actions/burger-constructor";

const initialState = {
    data: [],
    bun: {
        _id: '60d3b41abdacab0026a733c6',
        name: 'Краторная булка N-200i',
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png'
    }
}

export const burgerConstructor = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_IN_CONSTRUCTOR:
            return {
                ...state,
                data:[...state.data, action.payload]
            };
        case REMOVE_INGREDIENT_IN_CONCTRUCTOR:
            return {
                ...state,
                data: state.data.filter((item) => item.elementId !== action.payload ? true : false),
            };
        case BUN_SELECTOR:
            return {
                ...state,
                bun: action.payload
            }
        default: 
            return state;
    }
} 