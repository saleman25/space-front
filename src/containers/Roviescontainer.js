import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getCuriosity } from '../actions/roverActions';
import { getOpportunity } from '../actions/roverActions';
import { getSpirit } from '../actions/roverActions';
import Rover from '../components/Rover';
import { Link } from 'react-router-dom';
import '../css/roviesdivies.css';
import '../css/curiosity.css';
import '../css/opportunity.css';
import '../css/spirit.css';

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
            <div class='roviesdivies'>

            <Link to="/curiosity" style={{ textDecoration: 'none' }}>
    <span className="curiosity" style={{"display": "block"}}>
        curiosity
    </span>
    </Link>

    <Link to="/opportunity" style={{ textDecoration: 'none' }}>
    <span className="opportunity" style={{"display": "block"}}>
        opportunity
    </span>
    </Link>


    <Link to="/spirit" style={{ textDecoration: 'none' }}>
    <span className="spirit" style={{"display": "block"}}>
        spirit
    </span>
    </Link>







            </div>
        </div>
    )
}

}

const mapStateToProps = state => ({ rover: state.rover.all })



export default connect(mapStateToProps, { getCuriosity, getOpportunity, getSpirit })(Rovies);
