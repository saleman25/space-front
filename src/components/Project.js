import React from 'react';


// const reactStringReplace = require('react-string-replace');

const Project = (props) => {
    
    return (
    
            <div>
                <h1>{props.technology.title}</h1>
                <h2>{props.technology.startDate} - {props.technology.endDate}</h2>
                <h3>{props.technology.status}</h3>
                {props.technology.description}
            </div>
    )
}



export default Project

// other const to eliminate unwanted characters
// .replace("[<p></p><sub></sub><a></a>]", "")