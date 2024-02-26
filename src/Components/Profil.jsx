import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.jpeg";
import pro3 from "../assets/pro3.jpeg";
import pro4 from "../assets/pro4.jpeg";
import pro5 from "../assets/pro5.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Profil = () => {
  return (
    <div>
      <div className="profil-main">
        {" "}
        <div className="profil-text">
          <h4>MEET OUR EXPERTS</h4>
          <p>
            <strong>The Trust </strong> From Clients
          </p>
        </div>
        <div className="profil-pics">
          <div className="profil-cart">
            <img src={pro1} alt="" />
            <div className="profil-cart-text">
              <h5>NAME</h5>
              <p>Poste</p>
            </div>{" "}
            <div className="icon-main">
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="profil-icon" />
              <FontAwesomeIcon icon={faFacebook} className="profil-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="profil-icon" />
              <FontAwesomeIcon icon={faGithub} className="profil-icon" />
            </div>
          </div>
          <div className="profil-cart">
            <img src={pro2} alt="" />
            <div className="profil-cart-text">
              <h5>NAME</h5>
              <p>Poste</p>
            </div>{" "}
            <div className="icon-main">
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="profil-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="profil-icon" />
              <FontAwesomeIcon icon={faGithub} className="profil-icon" />
            </div>
          </div>
          <div className="profil-cart">
            <img src={pro3} alt="" />
            <div className="profil-cart-text">
              <h5>NAME</h5>
              <p>Poste</p>
            </div>{" "}
            <div className="icon-main">
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="profil-icon" />
              <FontAwesomeIcon icon={faFacebook} className="profil-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="profil-icon" />
              <FontAwesomeIcon icon={faGithub} className="profil-icon" />
            </div>
          </div>
          <div className="profil-cart">
            <img src={pro4} alt="" />
            <div className="profil-cart-text">
              <h5>NAME</h5>
              <p>Poste</p>
            </div>
            <div className="icon-main">
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="profil-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="profil-icon" />
            </div>
          </div>
          <div className="profil-cart">
            <img src={pro5} alt="" />
            <div className="profil-cart-text">
              <h5>NAME</h5>
              <p>Poste</p>
            </div>
            <div className="icon-main">
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="profil-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="profil-icon" />
              <FontAwesomeIcon icon={faGithub} className="profil-icon" />
            </div>
          </div>
        </div>
        <div className="profil-btn">
          <button className="black">See All Team</button>
          <button className="btnco btng">
            {" "}
            <Link to="/contact">Join Our Team</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
