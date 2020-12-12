function astronomyReducer(state= { all: [ ]}, action ) {
    switch (action.type) {
        case "FETCH_ASTRONOMY_PIC":
            return {...state, all: action.payload};

        case "CREATE_PIC":
            return { ...state, all: [...state.all, action.payload] };
            
            default:
                return state;
    }
}
export default astronomyReducer;