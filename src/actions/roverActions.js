export const getCuriosity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
    .then((result) => {
        console.log(result)
        const curiObj = {
            cameraName: result.photos.[0].camera.full_name, 
            cameraId: result.photos.[0].camera.id,
            roverName: result.photos.[0].rover.name,
            roverId: result.photos.[0].rover.id,
            imgSrc: result.photos.[0].img_src
        }
        dispatch({ type: "FETCH_CURIOSITY", payload: curiObj})
        }
        );
    };
};

export const getOpportunity = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) => {
            const oppObj = {
            cameraName: result.camera_full_name, 
            cameraId: result.camera_id,
            roverName: result.rover_name,
            roverId: result.rover_id,
            imgSrc: result.img_src
            }
        dispatch({ type: "FETCH_OPPORTUNITY", payload: oppObj.slice(0,5)})
        }
        );
    };
};

export const getSpirit = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) => {
            const spiritObj = {
            cameraName: result.camera_full_name, 
            cameraId: result.camera_id,
            roverName: result.rover_name,
            roverId: result.rover_id,
            imgSrc: result.img_src
            }
        dispatch({ type: "FETCH_SPIRIT", payload: spiritObj.slice(0,5)})
        }
        );
    };
};