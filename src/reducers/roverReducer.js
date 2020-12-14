function roverReducer(state= { all: [ ]}, action ) {
    switch (action.type) {
        case "FETCH_CURIOSITY":
            return {...state, all: action.payload};

        case "FETCH_OPPORTUNITY":
            return {...state, all: action.payload};

        case "FETCH_SPIRIT":
            return {...state, all: action.payload};

            default:
                return state;
    }
}
export default roverReducer;