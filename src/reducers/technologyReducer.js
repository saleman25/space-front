const initialState = {tech: null, tech1: null, tech2: null, tech3: null, tech4: null}

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