// gets the picture from the nasa api

export const getAstronomy = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/planetary/apod?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>
        dispatch({ type: "FETCH_ASTRONOMY_PIC", payload: result})
        );
    };
};

