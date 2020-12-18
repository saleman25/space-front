// gets the picture from the nasa api

export const getAstronomy = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/planetary/apod?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) => {
        const newObj = {
            explanation: result.explanation,
            date: result.date,
            url: result.url
        }
        dispatch({ type: "FETCH_ASTRONOMY_PIC", payload: newObj})
        }
        );
    };
};

// fetch(`localhost:3000/astronomy)
// .then(resp) => resp.json
// .then(result) => 
