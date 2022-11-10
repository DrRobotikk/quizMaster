import  './navbar.css'
import logo from "../logo.svg";
function Navbar(){
 
  
    return (
        <div className="navbar">
        <div className="navbarLogo">
            <img src={logo} alt="logo" />
        </div>
        <div >
            <ul className="navbarLinks">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
 
    )

}



export default Navbar;