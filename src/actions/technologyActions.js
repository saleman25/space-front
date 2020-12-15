// https://api.nasa.gov/techport/api/projects/{id_parameter}?api_key=DEMO_KEY
// figure out what u want yr parameters to be 


export const getTechnology = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/33080?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
            console.log(result)
        const techObj = {
            title: result.project.title,
            description: result.project.description,
            startDate: result.project.startDate,
            endDate: result.project.endDate,
            status: result.project.status
        }
        dispatch({ type: "FETCH_TECHNOLOGY", payload: techObj })
        }
        );
    };
};

export const getTechOne = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/11692?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
            console.log(result)
        const techObj = {
            title: result.project.title,
            description: result.project.description,
            startDate: result.project.startDate,
            endDate: result.project.endDate,
            status: result.project.status
        }
        dispatch({ type: "FETCH_TECH1", payload: techObj })
        }
        );
    };
};

export const getTechTwo = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/14656?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
            console.log(result)
        const techObj = {
            title: result.project.title,
            description: result.project.description,
            startDate: result.project.startDate,
            endDate: result.project.endDate,
            status: result.project.status
        }
        dispatch({ type: "FETCH_TECH2", payload: techObj })
        }
        );
    };
};

export const getTechThree = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/93857?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
            console.log(result)
        const techObj = {
            title: result.project.title,
            description: result.project.description,
            startDate: result.project.startDate,
            endDate: result.project.endDate,
            status: result.project.status
        }
        dispatch({ type: "FETCH_TECH3", payload: techObj })
        }
        );
    };
};

export const getTechFour = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/94151?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
            console.log(result)
        const techObj = {
            title: result.project.title,
            description: result.project.description,
            startDate: result.project.startDate,
            endDate: result.project.endDate,
            status: result.project.status
        }
        dispatch({ type: "FETCH_TECH4", payload: techObj })
        }
        );
    };
};
