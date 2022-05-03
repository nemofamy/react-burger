import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../actions/get-data.jsx";


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
                data: action.payload,
                dataRequest: false,
                dataFailed: false
            };
        case GET_DATA_ERROR:
            return { 
                ...state,
                dataRequest: false,
                dataFailed: true
            }
        default:
            return state;
    }
}