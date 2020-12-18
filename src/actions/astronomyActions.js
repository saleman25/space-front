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


// so it can save to my backend
const astronomyObj = () => {
    return {astronomy: {
        explanation: this.explanation,
        date: this.date,
        url: this.url
    }}
};

const createAstronomy = (astronomyObj) => {
    fetch(`http://localhost:3000/astronomies`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(astronomyObj)     
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
};