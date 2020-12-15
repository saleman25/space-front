import React from 'react';
import Astronomycontainer from '../containers/Astronomycontainer';
import Rovercontainer from '../containers/Rovercontainer';
import Techcontainer from '../containers/Techcontainer';
import '../css/divies.css';


export default function Home(){
    return (
        <div>
            <h1>Welcome</h1>
            <div class= 'divies'>
            < Astronomycontainer />
            < Rovercontainer />
            < Techcontainer />
            </div>
            
        </div>
    )
}

