import LC from "../assets/LC.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribing with email: ${email}`);
  };
  return (
    <div>
      <div className="footer-main">
        <div className="main-foot1">
          <div className="footer-contact">
            <img src={LC} alt="" />
            <h6>
              PKF Research Center <br /> Inovation and creativity
            </h6>
            <div className="foot-cnt-sub">
              <div className="sub-ctn-footer">
                {" "}
                <FontAwesomeIcon icon={faHouse} className="pro-icon" />
                <p>Yaounde | Cameroon - Emana</p>
              </div>
              <div className="sub-ctn-footer">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="pro-icon" />
                <p> contact@pkf-researchcenter.com</p>
              </div>
              <div className="sub-ctn-footer">
                <FontAwesomeIcon icon={faPhone} className="pro-icon" />
                <p> (+23)5535 68 68</p>
              </div>
            </div>
            <div className="foot-icons">
              <FontAwesomeIcon icon={faTwitter} className="foot-icon" />
              <FontAwesomeIcon icon={faFacebook} className="foot-icon" />
              <FontAwesomeIcon icon={faLinkedinIn} className="foot-icon" />
              <FontAwesomeIcon icon={faGithub} className="foot-icon" />
            </div>
          </div>
          <div className="footer-services">
            <h5>Services</h5>
            <p>IT Consultations</p>
            <p>Data Security</p>
            <p>Website Development</p>
            <p>UI/UX Design</p>
            <p>Cloud Services</p>
            <p>Game Development</p>
            <p>CRM & Software</p>
          </div>
          <div className="footer-info">
            {" "}
            <h5>Information </h5>
            <p>About Iteck</p>
            <p>Investors</p>
            <p>Contact</p>
            <p>Affiliate Program</p>
            <p>How it Works</p>
            <p>Pricing Plan</p>
            <p>Covid-19 Update</p>
          </div>
          <div className="footer-newsl">
            {" "}
            <h5>Newsletter</h5>
            <p>
              Register now to get latest updates on promotions & <br />
              coupons
            </p>
            <div className="subscribe-container">
              <input
                type="email"
                placeholder="Type Your Email"
                className="subscribe-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="subscribe btnk" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
            <p>
              By subscribing ,you accepted the our <a href="">Policy</a>
            </p>
          </div>
        </div>
        <div className="main-foot2">
          <p>
            © 2022 Copyrights by <a href="">PKF</a> All Rights Reserved
            .Designed by <a href="">ITC-Services</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
