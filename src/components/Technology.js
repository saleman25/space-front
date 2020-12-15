import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTechnology } from '../actions/technologyActions';

class Technology extends Component {

// fetch call 
componentDidMount(){
    this.props.getTechnology();
    console.log(this.props)
}

// another function abt the loading of the tech which is whats gonna render


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

export default connect(mapStateToProps, { getTechnology })(Technology);