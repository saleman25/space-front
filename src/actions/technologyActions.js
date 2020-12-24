// this one
export const getTechnology = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/94037?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
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
// n this one
export const getTechOne = () => {
    return (dispatch) => {
       return fetch(`https://api.nasa.gov/techport/api/projects/94430?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
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
       return fetch(`https://api.nasa.gov/techport/api/projects/93851?api_key=bS7Kb4VfcpKaKmarzxrfcYlg8CJGzJ9m6CIajasm`)
        .then((resp) => resp.json())
        .then((result) =>{
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

// so it can save to my backend
const techObj = () => {
    return {tech: {
        title: this.title,
        description: this.description,
        start_date: this.startDate,
        end_date: this.endDate,
        status: this.status
    }}
};

const createTech = (techObj) => {
    fetch(`http://localhost:3000/technologies`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(techObj)     
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
};
