import { 
    ADD_INGREDIENT_IN_CONSTRUCTOR, 
    REMOVE_INGREDIENT_IN_CONCTRUCTOR,
    BUN_SELECTOR,
    CHANGE_ELEMENT_ORDER
} from "../actions/burger-constructor";
import { CONSTRUCTOR_DATA_RESET } from "../actions/get-data";

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
                data:[...state.data, action.payload.item]
            };
        case REMOVE_INGREDIENT_IN_CONCTRUCTOR:
            return {
                ...state,
                data: state.data.filter(item => item.uuid !== action.payload ? true : false),
            };
        case BUN_SELECTOR:
            return {
                ...state,
                bun: action.payload.item
            };
            
        case CHANGE_ELEMENT_ORDER:
            const { dragIndex, hoverIndex } = action.payload;
            const dragElement = state.data[dragIndex];
            const hoverElement = state.data[hoverIndex];

            return {
                ...state,
                data: state.data.map((item, index) =>  
                    index === dragIndex ? hoverElement : index === hoverIndex ? dragElement : item)
            };
        case CONSTRUCTOR_DATA_RESET: 
            return {
                ...state,
                data: []
            };
        default: 
            return state;
    }
} 