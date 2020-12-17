import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTechnology } from '../actions/technologyActions';
import { getTechOne } from '../actions/technologyActions';
import { getTechTwo } from '../actions/technologyActions';
import { getTechThree } from '../actions/technologyActions';
import { getTechFour } from '../actions/technologyActions';

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
    console.log(this.props.technology)
}

render(){
    return (
        <div>
            <h1>{this.props.technology.title}</h1>
            <p>{this.props.technology.startDate} - {this.props.technology.endDate}</p>
            <h3>{this.props.technology.status}</h3>
            <p>{this.props.technology.description}</p>
        </div>
    )
}

}

const mapStateToProps = state => ({ technology: state.technology.all })

export default connect(mapStateToProps, { getTechnology, getTechOne, getTechTwo, getTechThree, getTechFour })(Technology);