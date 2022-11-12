import { Link } from 'react-router-dom';
import  './navbar.css'
function Navbar(){
 
  
    return (
        <div className="navbar">
        <div className="navbarLogo">
            <Link to="/"><h1>Quizz Master</h1></Link> 
        </div>
        <div >
            <ul className="navbarLinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
 
    )

}



export default Navbar;