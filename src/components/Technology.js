import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTechnology } from '../actions/technologyActions';
import { getTechOne } from '../actions/technologyActions';
import { getTechTwo } from '../actions/technologyActions';
import { getTechThree } from '../actions/technologyActions';
import { getTechFour } from '../actions/technologyActions';
import Project from '../components/Project';

class Technology extends Component {

// fetch call 
componentDidMount(){
    this.props.getTechnology();
    this.props.getTechOne();
    this.props.getTechTwo();
    this.props.getTechThree();
    this.props.getTechFour();
}

displayTech(){
    return this.props.tech.map(e => <Project technology={e} /> )
}

render(){
    return (
        <div>
           {this.displayTech()}
        </div>
    )
}

}

const mapStateToProps = state => ({ tech: state.technology.tech })

export default connect(mapStateToProps, { getTechnology, getTechOne, getTechTwo, getTechThree, getTechFour })(Technology);