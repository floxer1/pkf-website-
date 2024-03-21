import sara from "../assets/300x0w.png";
import sara1 from "../assets/Sara v2-demo.e3d99c3bc0bdf7c01e42.jpg";
import rc from "../assets/template homepage PKFREC Website.f3b2ac8295ff3ac51500.jpg";
import rc1 from "../assets/LC.png";
import af from "../assets/Site-Web.png";
import af1 from "../assets/Slides_2021_Institution-ENG2_resize.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const SingleProject = () => {
  return (
    <div>
      <div className="pr-banner">
        <h1>Projects</h1>
        <p>
          Building a Technological Legacy for Africa: Bridging Innovation,
          Transforming Lives, and Pioneering Progress.
        </p>
      </div>
      <div className="proto">
        <div className="project1">
          <div className="blog-carousel">
            <div className="blog-info">
              <div className="blog-ctn1">
                <div className="blog-subimg">
                  <img src={sara1} alt="" />
                </div>
                <div className="blog-title">
                  {" "}
                  <h2>SARA by Afriland Cameroon</h2>
                </div>
              </div>
              <div className="features">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  dolores ipsum debitis nostrum consequuntur mollitia unde
                  excepturi commodi, ea quia totam assumenda repudiandae
                  incidunt id cupiditate porro veritatis necessitatibus
                  exercitationem.
                </p>
                <div className="blog-ft">
                  <h2>Features</h2>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Lastest IT Solution & Integration with Blockchain
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Over 100+ Payment Gateways Support
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    AI Machine & Deep Learning
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Dedicated Support 24/7
                  </h5>
                </div>

                <button className="btnco btng">
                  <Link to="/src/Pages/SingleProject.jsx">Voir Demo</Link>
                </button>
              </div>
            </div>
            <div className="blog-image">
              <img src={sara} alt="" />
            </div>
          </div>
        </div>
        <div className="project2">
          <div className="blog-carousel">
            <div className="blog-info">
              <div className="blog-ctn1">
                <div className="blog-subimg">
                  <img src={rc1} alt="" />
                </div>
                <div className="blog-title">
                  {" "}
                  <h2>SARA by Afriland Cameroon</h2>
                </div>
              </div>
              <div className="features">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  dolores ipsum debitis nostrum consequuntur mollitia unde
                  excepturi commodi, ea quia totam assumenda repudiandae
                  incidunt id cupiditate porro veritatis necessitatibus
                  exercitationem.
                </p>
                <div className="blog-ft">
                  <h2>Features</h2>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Lastest IT Solution & Integration with Blockchain
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Over 100+ Payment Gateways Support
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    AI Machine & Deep Learning
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Dedicated Support 24/7
                  </h5>
                </div>

                <button className="btnco btng">
                  <Link to="/src/Pages/SingleProject.jsx">Voir Demo</Link>
                </button>
              </div>
            </div>
            <div className="blog-image2">
              <img src={rc} alt="" />
            </div>
          </div>
        </div>
        <div className="project3">
          <div className="blog-carousel">
            <div className="blog-info">
              <div className="blog-ctn1">
                <div className="blog-subimg">
                  <img src={af1} alt="" />
                </div>
                <div className="blog-title">
                  {" "}
                  <h2>SARA by Afriland Cameroon</h2>
                </div>
              </div>
              <div className="features">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  dolores ipsum debitis nostrum consequuntur mollitia unde
                  excepturi commodi, ea quia totam assumenda repudiandae
                  incidunt id cupiditate porro veritatis necessitatibus
                  exercitationem.
                </p>
                <div className="blog-ft">
                  <h2>Features</h2>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Lastest IT Solution & Integration with Blockchain
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Over 100+ Payment Gateways Support
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    AI Machine & Deep Learning
                  </h5>
                </div>
                <div className="blog-center">
                  <h5>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Dedicated Support 24/7
                  </h5>
                </div>

                <button className="btnco btng">
                  <Link to="/src/Pages/SingleProject.jsx">Voir Demo</Link>
                </button>
              </div>
            </div>
            <div className="blog-image2">
              <img src={af} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
