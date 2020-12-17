import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';


export default function Nav(){
    return (
        <div class='topnav'>
            <ul class='navie'>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/astronomy">Astronomy</Link>
                    <Link to="/technology">Technology</Link>
                    <Link to="/rover">Rovers</Link>
                    
                </li>
            </ul>
        </div>
    )
}