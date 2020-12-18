import React, { Component } from 'react';

class Rover extends Component {


render(){
    console.log(this.props.rover.camera.name)
    return (
        <div>
            <h1>{this.props.rover.rover.name}</h1>
            <h2>{this.props.rover.camera.name}</h2>
            <img src={this.props.rover.img_src}></img>
        </div>
    )
}

}


export default Rover;