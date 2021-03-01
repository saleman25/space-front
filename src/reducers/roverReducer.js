const initialState = { curiosity: null, opportunity: null, spirit: null, perseverance: null }

function roverReducer(state= initialState, action ) {
    switch (action.type) {
        case "FETCH_CURIOSITY":
            return {...state, curiosity: action.payload};

        case "FETCH_OPPORTUNITY":
            return {...state, opportunity: action.payload};

        case "FETCH_SPIRIT":
            return {...state, spirit: action.payload};

        case "FETCH_PERSEVERANCE":
            return {...state, perseverance: action.payload};   

            default:
                return state;
    }
}
export default roverReducer;