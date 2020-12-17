const initialState = {}

function technologyReducer(state= { all: [ ]}, action ) {
    switch (action.type) {
        case "FETCH_TECHNOLOGY":
            return {...state, all: action.payload};

            case "FETCH_TECH1":
            return {...state, all: action.payload};

            case "FETCH_TECHN2":
            return {...state, all: action.payload};

            case "FETCH_TECH3":
            return {...state, all: action.payload};

            case "FETCH_TECH4":
            return {...state, all: action.payload};

            default:
                return state;
    }
}
export default technologyReducer;