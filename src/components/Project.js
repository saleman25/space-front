import React from 'react';

const Project = (props) => {
    
    return (
            <div>
                <br></br>
                ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
                <h2>{props.technology.title}</h2>
                <h3>{props.technology.startDate} - {props.technology.endDate}</h3>
                <h4>{props.technology.status}</h4>
                {props.technology.description} 
            </div>
    )
}

export default Project