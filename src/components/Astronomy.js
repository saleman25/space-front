import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAstronomy } from '../actions/astronomyActions';

class Astronomy extends Component {

// fetch call 
componentDidMount(){
    this.props.getAstronomy();
    console.log(this.props.astronomy)
}

srcTag(){
    console.log(this.props.astronomy)
    if (this.props.astronomy.url){
    if (this.props.astronomy.url.includes("youtube")){
        console.log(this.props.astronomy.url)
        return(
            <video>
            <iframe src={this.props.astronomy.url}></iframe>
            </video>
        )
    }
        else{
            return(
                <img src={this.props.astronomy.url}></img>
            )
    }}
}

render(){
    return (
        <div>
            <h1>{this.props.astronomy.date}</h1>
            {this.srcTag()}
            <p>{this.props.astronomy.explanation}</p> 
        </div>
    )
}
}

const mapStateToProps = state => ({ astronomy: state.astronomy.all })

export default connect(mapStateToProps, { getAstronomy })(Astronomy);