// https://api.nasa.gov/techport/api/projects/{id_parameter}?api_key=DEMO_KEY
// figure out what u want yr parameters to be 


export const getTechnology = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects?active&api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
        const techObj = {
            title = result.title,
            description = result.description,
            startDate = result.start_date,
            endDate = result.end_date,
            status = result.status
        }
        dispatch({ type: "FETCH_TECHNOLOGY", payload: techObj.slice(0,5)})
        }
        );
    };
};

