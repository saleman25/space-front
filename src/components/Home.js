import React from 'react';
import Astronomycontainer from '../containers/Astronomycontainer';
import Rovercontainer from '../containers/Rovercontainer';
import Techcontainer from '../containers/Techcontainer';
import '../css/divies.css';


export default function Home(){
    return (
        <div>
            <h1>★ Welcome to a little about Space ★</h1>
            <h4>Click on one to learn more!</h4>
                <br></br>
                    <div class= 'divies'>
                        < Astronomycontainer />
                        < Rovercontainer />
                        < Techcontainer />
                    </div>
            
        </div>
    )
}

