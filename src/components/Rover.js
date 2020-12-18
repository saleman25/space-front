import React, { Component } from 'react';
import '../css/picies.css';

class Rover extends Component {


render(){
    console.log(this.props.rover.camera.name)
    return (
        <div>
            <h1>{this.props.rover.rover.name}</h1>
            <h2>{this.props.rover.camera.full_name}</h2>
            <div class='picies'>
            <img src={this.props.rover.img_src}></img>
            </div>
        </div>
    )
}

}


export default Rover;