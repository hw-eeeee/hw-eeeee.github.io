import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons8-logo-48.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Website Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
