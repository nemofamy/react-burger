import { 
    GET_DATA_REQUEST, 
    GET_DATA_SUCCESS, 
    GET_DATA_ERROR, 
    INGREDIENT_AMOUNT_INCREASE, 
    INGREDIENT_AMOUNT_DECREASE,
    BUN_AMOUNT_CHANGE,
    CONSTRUCTOR_DATA_RESET 
    } from "../actions/get-data.jsx";


const initialState = {
    dataRequest: false,
    dataFailed: false, 
    data: [],
} 

export const getData = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                dataRequest: true,
                dataFailed: false
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.map(item => {
                    return { ...item, amount: 0 };
                }),
                dataRequest: false,
                dataFailed: false
            };
        case GET_DATA_ERROR:
            return { 
                ...state,
                dataRequest: false,
                dataFailed: true
            }
        case INGREDIENT_AMOUNT_INCREASE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item._id === action.payload._id) {
                        return { ...item, amount: ++item.amount } 
                    } else {
                        return item;
                    }
                })
            };
        case INGREDIENT_AMOUNT_DECREASE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item._id === action.payload._id) {
                        return { ...item, amount: --item.amount } 
                    } else {
                        return item;
                    }
                })
            };
        case BUN_AMOUNT_CHANGE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item._id === action.payload._id) {
                        return { ...item, amount: item.amount + 2 } 
                    }
                    if (item.type === 'bun') {
                        return { ...item, amount: 0 } 
                    }
                    return item;
                })
            };
        case CONSTRUCTOR_DATA_RESET:
            return {
                ...state,
                data: state.data.map(item => {
                    return {...item, amount: 0}
                })
            };
        default:
            return state;
    }
}