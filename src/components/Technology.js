import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTechnology } from '../actions/technologyActions';

class Technology extends Component {

// fetch call 
componentDidMount(){
    this.props.getTechnology();
}

// another function abt the loading of the tech which is whats gonna render


render(){
    return (
        <div>
            <h1>{this.props.technology.title}</h1>
            <h2>{this.props.technology.status}</h2>
            <p>{this.props.technology.description}</p>
        </div>
    )
}

}

const mapStateToProps = state => ({ technology: state.technology.all })

export default connect(mapStateToProps, { getTechnology })(Technology);