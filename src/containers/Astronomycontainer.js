import '../css/astronomydiv.css';
import { Link } from 'react-router-dom';

export default function astronomyContainer(){
    return (
        
    <Link to="/astronomy" style={{ textDecoration: 'none' }}>
    <span className="astronomy" style={{"display": "block"}}>
        Wanna see astronomy?
    </span>
    </Link>
        
    )
}

// this is going to link to /astronomy
// i think its an onclick that will link to /astronomy