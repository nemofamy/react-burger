import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from "./actions";

const initialState = {
    dataRequest: false,
    dataFailed: false, 
    data: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                dataRequest: true,
                dataFailed: false
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                dataRequest: false,
                dataFailed: false
            };
        case GET_DATA_FAILED:
            return {
                ...state,
                dataRequest: false,
                dataFailed: true
            }
        default:
            return state;
    }
}