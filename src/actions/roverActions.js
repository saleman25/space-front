export const getCuriosity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
    .then((result) => {
        let curiObj = result.photos.slice(0,5)
        dispatch({ type: "FETCH_CURIOSITY", payload: curiObj})
        }
        );
    };
};

export const getOpportunity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) => {
            let oppObj = result.photos.slice(0,5)
        dispatch({ type: "FETCH_OPPORTUNITY", payload: oppObj })
        }
        );
    };
};

export const getSpirit = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=400&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) => {
            let spiritObj = result.photos.slice(0,5)
        dispatch({ type: "FETCH_SPIRIT", payload: spiritObj })
        }
        );
    };
};

export const getPerseverance = () => {
    return (dispatch) => {
        return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=DEMO_KEY`)
        .then((resp) => resp.json())
        .then((result) => {
            let perObj = result.photos.slice(0,5)
        dispatch({ type: "FETCH_PERSEVERANCE", payload: perObj })
        }
        );
    };
};

// so it can save to my backend
const roveObj = () => {
    return {rove: {
        camera_name: this.rover.camera.full_name,
        camera_id: this.rover.camera.id,
        rover_name: this.rover.name,
        rover_id: this.rover.id,
        img_source: this.rover.img_src
    }}
};

const createRove = (roveObj) => {
    fetch(`http://localhost:3000/rovers`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(roveObj)     
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
};