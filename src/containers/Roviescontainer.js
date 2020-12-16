import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getCuriosity } from '../actions/roverActions';
import { getOpportunity } from '../actions/roverActions';
import { getSpirit } from '../actions/roverActions';
import Rover from '../components/Rover';

class Rovies extends Component {

// fetch call i think this needs to be an if statement
componentDidMount(){
    this.props.getCuriosity();
    this.props.getOpportunity();
    this.props.getSpirit();
}

displayRover(){
    return this.props.rover.map(e => <Rover rovies={e} /> )
}

render(){
    console.log(this.props.rover)
    return (
        <div>
            <div>curiosity</div>
            <div>opportunity</div>
            <div>spirit</div>
        </div>
    )
}

}

const mapStateToProps = state => ({ rover: state.rover.all })



export default connect(mapStateToProps, { getCuriosity, getOpportunity, getSpirit })(Rovies);
