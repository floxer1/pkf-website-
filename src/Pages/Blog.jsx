import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export const Blog = () => {
  return (
    <div>
      <div>
        <h2></h2>
        <div>
          <div className="blog-info">
            <div>
              <div className="blog-subimg"></div>
              <div className="blog-title"></div>
            </div>
            <div>
              <p></p>
            </div>
            <div className="conversion-right">
              <h4>WHY CHOOSE US</h4>
              <div className="conversion-sub">
                <h1>Boost Your Business</h1>
                <h2>With New Tech</h2>
              </div>

              <p>
                Our team can assist you in transforming your busness through{" "}
                <br />
                latest tech capabilities to stay ahead of the curve.
              </p>
              <div className="check-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Lastest IT Solution & Integration with Blockchain
                </h5>
              </div>
              <div className="check-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Over 100+ Payment Gateways Support
                </h5>
              </div>
              <div className="check-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  AI Machine & Deep Learning
                </h5>
              </div>
              <div className="check-center">
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
          <div className="blog-image"></div>
        </div>
      </div>
    </div>
  );
};
