import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCuriosity } from '../actions/roverActions';
// import { getOpportunity } from '../actions/roverActions';
// import { getSpirit } from '../actions/roverActions';

class Rover extends Component {

// fetch call i think this needs to be an if statement
componentDidMount(){
    this.props.getCuriosity();

}

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

const mapStateToProps = state => ({ rover: state.rover.all })



export default connect(mapStateToProps, { getCuriosity })(Rover);