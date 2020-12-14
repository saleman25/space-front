import React, { Component } from 'react';
import { getTechnology } from './actions/technologyActions';

class Technology extends Component {

// fetch call 
componentDidMount(){
    this.props.getTechnology()
}

// another function abt the loading of the tech which is whats gonna render


render(){
    return (
        <div>
            teehee
        </div>
    )
}

}

export default Technology