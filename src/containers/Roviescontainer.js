import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getCuriosity } from '../actions/roverActions';
import { getOpportunity } from '../actions/roverActions';
import { getSpirit } from '../actions/roverActions';
import Rover from '../components/Rover';
import { Link } from 'react-router-dom';

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

handleOnClickCuri() {
    
}

render(){
    return (
        <div>
            <h1>Which Rover Pictures Would You Like to See?</h1>
            <Link to="/curiosity">Curiosity</Link>
            <Link to="/opportunity">Opportunity</Link>
            <Link to="/spirit">Spirit</Link>
        </div>
    )
}

}

const mapStateToProps = state => ({ rover: state.rover.all })



export default connect(mapStateToProps, { getCuriosity, getOpportunity, getSpirit })(Rovies);
