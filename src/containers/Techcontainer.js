import '../css/techdiv.css';
import { Link } from 'react-router-dom';

export default function techContainer(){
    return (
        
        <Link to="/technology" style={{ textDecoration: 'none' }}>
        <span className="technology" style={{"display": "block"}}>
            techies
        </span>
        </Link>
    )
}

// onclick so it can link to tech page?