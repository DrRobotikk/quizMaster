import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/">
          <h1>Quiz App</h1>
        </Link>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/quizes">Quizes</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
