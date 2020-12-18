import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAstronomy } from '../actions/astronomyActions';
import '../css/astros.css';

class Astronomy extends Component {

// fetch call 
componentDidMount(){
    this.props.getAstronomy();
}

srcTag(){
    if (this.props.astronomy.url){
    if (this.props.astronomy.url.includes("youtube")){
        return(
            <div class='astros'>
            <video>
            <iframe src={this.props.astronomy.url}></iframe>
            </video>
            </div>
        )
    }
        else{
            return(
                <div class='astros'>
                <img src={this.props.astronomy.url}></img>
                </div>
            )
    }}
}

render(){
    return (
        <div>
            <h1>{this.props.astronomy.date}</h1>
            {this.srcTag()}
            ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
            <p>{this.props.astronomy.explanation}</p> 
            ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・★
        </div>
    )
}
}

const mapStateToProps = state => ({ astronomy: state.astronomy.all })

export default connect(mapStateToProps, { getAstronomy })(Astronomy);
