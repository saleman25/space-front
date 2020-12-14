import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/astronomy">Astronomy</Link>
                    <Link to="/technology">Technology</Link>
                    <Link to="/rover">Rover</Link>
                </li>
            </ul>
        </div>
    )
}