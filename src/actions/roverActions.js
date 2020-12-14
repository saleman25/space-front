export const getCuriosity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>
        dispatch({ type: "FETCH_CURIOSITY", payload: result})
        );
    };
};

export const getOpportunity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>
        dispatch({ type: "FETCH_OPPORTUNITY", payload: result})
        );
    };
};

export const getSpirit = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>
        dispatch({ type: "FETCH_SPIRIT", payload: result})
        );
    };
};