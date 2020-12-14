function technologyReducer(state= { all: [ ]}, action ) {
    switch (action.type) {
        case "FETCH_TECHNOLOGY":
            return {...state, all: action.payload};

            default:
                return state;
    }
}
export default technologyReducer;