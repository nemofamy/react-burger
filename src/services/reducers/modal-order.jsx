import { 
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_FAILED,
    GET_ORDER_NUMBER_SUCCESS,
    OPEN_ORDER_MODAL, 
    CLOSE_ORDER_MODAL 
} from "../actions/modal-order";

const initialState = {
    dataRequest: false,
    dataFailed: false, 
    orderNumber: '',
    isVisible: false
}

export const modalOrder = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDER_NUMBER_REQUEST:
            return {
                ...state,
                dataRequest: true,
                dataFailed: false,
            };
        case GET_ORDER_NUMBER_SUCCESS:
            return {
                ...state,
                dataRequest: false,
                dataFailed: false,
                orderNumber: action.payload
            };
        case GET_ORDER_NUMBER_FAILED:
            return {
                ...state,
                dataRequest: false,
                dataFailed: true
            };
        case OPEN_ORDER_MODAL:
            return {
                ...state,
                isVisible: true
            };
        case CLOSE_ORDER_MODAL:
            return {
                ...state,
                isVisible: false,
                orderNumber: ''
            };
        default:
            return state;
    }
}