import React, { Component } from 'react';
import { getAstronomy } from './actions/astronomyActions';

class Astronomy extends Component {

// fetch call 
componentDidMount(){
    this.props.getAstronomy()
}

// another function abt the loading of the pic which is whats gonna render


render(){
    return (
        <div>
            smthn
        </div>
    )
}

}

export default Astronomy