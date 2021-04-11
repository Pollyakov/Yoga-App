import { Link } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="active">
            <i className="fas fa-home icon"></i>
            Your Sequences
          </Link>
        </li>
        <li>
          <Link to="/asanas">
          <i className="fas fa-pen-fancy icon"></i>
            Build a New Sequence
          </Link>
        </li>
        <li>
          <Link to = "/about">
            <i className ="fas fa-info icon"></i>
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
