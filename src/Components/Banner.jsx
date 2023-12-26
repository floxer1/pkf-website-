import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="left">
          {" "}
          <div className="speaker">
            <FontAwesomeIcon icon={faBullhorn} />
          </div>
          <div className="text-left">
            <p>
              <strong>Now Hiring:</strong>Are you a driven and motivated
              <a href=""> 1st Line IT Support Engineer?</a>
            </p>
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
