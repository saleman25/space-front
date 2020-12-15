import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAstronomy } from './actions/astronomyActions';

class Astronomy extends Component {

// fetch call 
componentDidMount(){
    this.props.getAstronomy();
}


render(){
    return (
        <div>
            <h1>{this.props.date}</h1>
            <img src ={this.props.url}/>
            <p>{this.props.explanation}</p> 
        </div>
    )
}
}

const mapStateToProps = state => ({ astronomy: state.astronomy })

export default connect(mapStateToProps, { getAstronomy })(Astronomy);