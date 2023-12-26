import OLC from "../assets/OLC.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

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
                <a href="">Home</a>
              </li>
              <li className="dropdown-parent">
                <a href="">
                  Pages
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Search</a>
                  </li>
                  <li>
                    <a href="">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown-parent">
                <a href="">
                  Blog
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Single Post</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown-parent">
                <a href="">
                  Projects
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul className="dropdown">
                  <a href="">Portfolio</a>

                  <a href="">Single Project</a>
                </ul>
              </li>
              <li className="items">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-info">
          <div className="phone">
            <a href="">
              <FontAwesomeIcon icon={faPhone} />
            </a>
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
