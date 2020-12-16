const initialState = { curiosity: null, opportunity: null, spirit: null }

function roverReducer(state= initialState, action ) {
    switch (action.type) {
        case "FETCH_CURIOSITY":
            return {...state, curiosity: action.payload};

        case "FETCH_OPPORTUNITY":
            return {...state, opportunity: action.payload};

        case "FETCH_SPIRIT":
            return {...state, spirit: action.payload};

            default:
                return state;
    }
}
export default roverReducer;