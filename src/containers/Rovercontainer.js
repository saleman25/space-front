import '../css/roverdiv.css';
import { Link } from 'react-router-dom';

export default function roverContainer(){
    return (
        <Link to="/rover" style={{ textDecoration: 'none' }}>
            <span className="rover" style={{"display": "block"}}>
                Mars Rovers
            </span>
        </Link>
    )
}

