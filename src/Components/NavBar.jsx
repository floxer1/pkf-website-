import OLC from "../assets/OLC.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
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
                <Link>
                  Pages
                  <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                </Link>

                <ul className="dropdown">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/action">Services</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                  <li>
                    <Link to="/errorpage"> Error page</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-parent">
                <Link>
                  Blog
                  <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/singlepost">Single post</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-parent">
                <Link>
                  Projects
                  <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/port">Portfolio</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/singleproject">Single project</Link>
                  </li>
                </ul>
              </li>
              <li className="items">
                <Link to="/contact">Contact</Link>
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
              <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </div>
            <p className="search">Free Quote</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
