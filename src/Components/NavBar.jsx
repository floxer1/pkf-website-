import OLC from "../assets/OLC.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navi">
        <div className="logo">
          <img src={OLC} alt="Description of your image" />
        </div>
        <div className="nav-items">
          <nav>
            <ul className="nav-list">
              <li className="items">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown-parent">
                <Link to="/action">Services</Link>
              </li>
              <li className="dropdown-parent">
                <Link to="/about">About</Link>
              </li>
              <li className="dropdown-parent">
                <Link to="/singleproject">Projects</Link>
              </li>
              <li className="items">
                <Link to="/search">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-info">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
            <div className="number">
              <p>
                hotline 24/7
                <br />
                <strong>(+23)5535 68 68</strong>
              </p>
            </div>
          </div>

          <div className="nav-search">
            <div className="loop">
              <a href="/contact" className="search">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
