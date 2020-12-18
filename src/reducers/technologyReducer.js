const initialState = {tech: []}

function technologyReducer(state= initialState, action ) {
    switch (action.type) {
        case "FETCH_TECHNOLOGY":
            return {...state, tech: [...state.tech, action.payload]};

            case "FETCH_TECH1":
            return {...state, tech: [...state.tech, action.payload]};

            case "FETCH_TECHN2":
            return {...state, tech: [...state.tech, action.payload]};

            case "FETCH_TECH3":
            return {...state, tech: [...state.tech, action.payload]};

            case "FETCH_TECH4":
            return {...state, tech: [...state.tech, action.payload]};

            default:
                return state;
    }
}
export default technologyReducer;