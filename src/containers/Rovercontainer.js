import '../css/roverdiv.css';
import { Link } from 'react-router-dom';

export default function roverContainer(){
    return (
        <Link to="/rover" style={{ textDecoration: 'none' }}>
        <span className="rover" style={{"display": "block"}}>
            rovies heheheh
        </span>
        </Link>
    )
}

// on click, n then three buttons will appear? for each rover n then itll link to each corresponding rover link
