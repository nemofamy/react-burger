
const initialState = {
    data: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_DATA':
            return {...state,
            data: action.payload
            };
        default:
            return state;
    }
}