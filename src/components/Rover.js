import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCuriosity } from '../actions/roverActions';
import { getOpportunity } from '../actions/roverActions';
import { getSpirit } from '../actions/roverActions';

class Rover extends Component {

// fetch call i think this needs to be an if statement
componentDidMount(){
    this.props.getCuriosity();
    this.props.getOpportunity();
    this.props.getSpirit()
}

// another function abt the loading of the tech which is whats gonna render
// this will prop have to be an if statement too ?

render(){
    return (
        <div>
            im confused
        </div>
    )
}

}

const mapStateToProps = state => ({ 
    curiosity: state.curiosity.all,
    opportunity: state.opportunity.all, 
    spirit: state.spirit.all  
})

export default connect(mapStateToProps, { getCuriosity, getOpportunity, getSpirit })(Rover);