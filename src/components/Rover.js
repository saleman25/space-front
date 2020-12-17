import React, { Component } from 'react';

class Rover extends Component {


render(){
    return (
        <div>
            <h1>{this.props.rover.roverName}</h1>
            <h2>{this.props.rover.cameraName} - #{this.props.rover.cameraId}</h2>
            <img src={this.props.rover.imgSrc}></img>
        </div>
    )
}

}


export default Rover;