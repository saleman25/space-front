import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getCuriosity } from '../actions/roverActions';
import { getOpportunity } from '../actions/roverActions';
import { getSpirit } from '../actions/roverActions';
import Rover from '../components/Rover';
import { Link } from 'react-router-dom';
import '../css/roviesdivies.css';
import '../css/curiosity.css';
import '../css/opportunity.css';
import '../css/spirit.css';

class Rovies extends Component {
state = { rove: null }
// fetch call i think this needs to be an if statement
componentDidMount(){
    this.props.getCuriosity();
    this.props.getOpportunity();
    this.props.getSpirit();
}

displayRover(){
 switch (this.state.rove){
     case 'Curiosity':
     return this.mapCuriosity();
     case 'Opportunity':
     return this.mapOpportunity();
        case 'Spirit':
            return this.mapSpirit();
             
             default:
              return null
 }

}

handleOnClickCuri = (e) => {
this.setState({rove: e.target.innerHTML})
}

mapCuriosity(){
return this.props.curiosity.map(e => <Rover rover={e}/>)
}

mapOpportunity(){
    return this.props.opportunity.map(e => <Rover rover={e}/>)
}

mapSpirit(){
    return this.props.spirit.map(e => <Rover rover={e}/>)
}

render(){
    console.log(this.props.curiosity)
    return (
        <div>
            <h1>Which Rover Pictures Would You Like to See?</h1>
                <div class='roviesdivies'>

                    <button>
                        <span className="curiosity" style={{"display": "block"}} onClick={this.handleOnClickCuri}>
                            Curiosity
                        </span>
                    </button>

                    <button>
                        <span className="opportunity" style={{"display": "block"}}>
                            Opportunity
                        </span>
                    </button>


                    <button>
                        <span className="spirit" style={{"display": "block"}}>
                            Spirit
                        </span>
                    </button>
                    
                </div>
                {this.props.curiosity? this.displayRover(): null}
        </div>
    )
}

}

const mapStateToProps = state => ({ curiosity: state.rover.curiosity, opportunity: state.rover.opportunity, spirit: state.rover.spirit })



export default connect(mapStateToProps, { getCuriosity, getOpportunity, getSpirit })(Rovies);
