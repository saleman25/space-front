export const getAstronomy = () => {
    return (dispatch) => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((pic) =>
        dispatch({ type: "FETCH_ASTRONOMY_PIC", payload: pic})
        );
    };
};

export const createPic = (data) => {
    return (dispatch) => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((resp) => resp.json())
        .then((pic) =>
        dispatch({ type: "CREATE_PIC", payload: pic})
        )
    }
}