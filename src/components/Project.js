import React, { Component } from 'react';


class Project extends Component {
   
    
    render(){
        //debugger
        return(
            <div>
                
                 <br></br>
                ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
        <h2>{this.props.technology.title}</h2>
                <h3>{this.props.technology.startDate} - {this.props.technology.endDate}</h3>
                <h4>{this.props.technology.status}</h4>
                {this.props.technology.description}
            </div>
        )
    }
}


export default Project

// create a sort button that toggles meaning whenever it is clicked itll sort alpha 
// when i clicke it again itll go back to normal 
// you might need to change a nonstate component to a class componenet
// no stackoverflow everything else ok 

// button 
// then its going to have a filter method or something to sort it
// button it goes back to normal