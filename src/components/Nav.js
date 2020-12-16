import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

export default function Nav(){
    return (
        <div class='topnav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/astronomy">Astronomy</Link>
                    <Link to="/technology">Technology</Link>
                    <Link to="/rover">Rover</Link>
                    {/* <div>
                        <Dropdown />
                    </div> */}
                    <Link to="/curiosity">Curiosity</Link>
                    <Link to="/opportunity">Opportunity</Link>
                    <Link to="/spirit">Spirit</Link>
                    
                </li>
            </ul>
        </div>
    )
}