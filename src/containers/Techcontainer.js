import '../css/techdiv.css';
import { Link } from 'react-router-dom';

export default function techContainer(){
    return (
        
        <Link to="/technology" style={{ textDecoration: 'none' }}>
        <span className="technology" style={{"display": "block"}}>
            Technologies
        </span>
        </Link>
    )
}

