import '../css/astronomydiv.css';
import { Link } from 'react-router-dom';

export default function astronomyContainer(){
    return (
        
    <Link to="/astronomy" style={{ textDecoration: 'none' }}>
    <span className="astronomy" style={{"display": "block"}}>
        Astronomy Picture of the Day
    </span>
    </Link>
        
    )
}
