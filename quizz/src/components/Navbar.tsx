import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Quizz</h1>
      </div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/quiz">Quizzes</Link>
    </nav>
  );
};
