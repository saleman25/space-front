import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTechnology } from '../actions/technologyActions';
import { getTechOne } from '../actions/technologyActions';
import { getTechTwo } from '../actions/technologyActions';
import { getTechThree } from '../actions/technologyActions';
import { getTechFour } from '../actions/technologyActions';
import Project from '../components/Project';
//import { bindActionCreators } from 'redux'

class Technology extends Component {
   
    
    // fetch call 
    componentDidMount(){
        this.props.getTechnology();
        this.props.getTechOne();
        this.props.getTechTwo();
        this.props.getTechThree();
        this.props.getTechFour();
    }
    
    constructor(props){
        super(props)
/*        if(this.props.tech){
            console.log(this.props.tech)
        }else{
            console.log("fuck")
        }*/
        //super(props)
        this.state = {titles: [], asc: true}
        //debugger
        //this.state = {titles: [this.props.tech[0], this.props.tech[1], this.props.tech[2], this.props.tech[3]], asc: true}

        //console.log(this.state)
    }

displayTech(){
    return this.props.tech.map(e => <Project technology={e} /> )    
}


// displayTitles(){
//     this.props.tech.map((e) => {
//     const tt = []
//     const title = [e[0].title, e[1].title, e[2].title, e[3].title];
//     const listTitle = title.map((titles) => 
//     tt.push(...titles)
//    )
//    return tt
   
//     });
// }


// displaySortedTitles(){
//     this.props.tech.map((e) => {
//         const st = []
//     const titles = [e[0].title, e[1].title, e[2].title, e[3].title]
//     titles.sort((a,b) => a.localCompare(b))
//    st.push(...titles)
//     return st
// });
// }

// title(){
    
//     if (this.handleClick){
        
//         if (this.handleClick ? "true" : "false"){
//             return(
//             <h2>{this.displaySortedTitles}</h2>
//             )
//         }
//             else{
//                 return(
//                 <h2>{this.displayTitles}</h2>
//                 )
//         }}
//     }

// handleClick(event) {
//     this.handleClick = this.handleClick.bind(this);
//     this.setState = ({sorted:this.displaySortedTitles})
//     debugger
//     this.title();
     
// }

 toggleOrder = () => {
    if(this.props.tech[3]){
        this.setState({
            ...this.state,
            titles: [this.props.tech[0], this.props.tech[1], this.props.tech[2], this.props.tech[3]]
        }, ()=>{  //debugger
    //this.toggleOrder = this.toggleOrder.bind(this);
    this.setState({
        ...this.state,
         titles: this.state.asc
         ? this.state.titles.sort((a,b) => a-b)
         : this.state.titles.reverse(),
         asc: !this.state.asc
    }, ()=>{ console.log(this.state)})})}
    //console.log(this.props.tech)
 }

render(){
    //debugger
    const { titles, asc } = this.state;
    return (
        
        <div>
            <button onClick={this.toggleOrder}>
                { asc ? 'Unsort' : 'Sort'} 
            </button>
    {titles.map(title => (<div><h2 key="{title}">{title.title}</h2> <p>{title.description}</p></div>))}
            {this.displayTech()}
        </div>
    )
}

}

const mapStateToProps = state => {
    //debugger
    return(
    { tech: state.technology.tech }
    )}
export default connect(mapStateToProps, { getTechnology, getTechOne, getTechTwo, getTechThree, getTechFour })(Technology);


// if handclick false return blahblah
// if handclick true return 