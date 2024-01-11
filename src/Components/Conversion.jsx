import chooselines from "../assets/choose_lines.png";
import choosebubbles from "../assets/choose_bubbles.png";
import choosebrands from "../assets/choose_brands.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Conversion = () => {
  return (
    <div>
      <div className="sup-abs">
        <div className="conversion-left">
          <div className="abs">
            <img className="ch1" src={chooselines} alt="" />
          </div>
          <div className="abs1">
            <img className="ch2" src={choosebubbles} alt="" />
          </div>
          <div className="abs2">
            <img className="ch3" src={choosebrands} alt="" />
          </div>
        </div>
        <div className="conversion-right">
          <h4>WHY CHOOSE US</h4>
          <div className="conversion-sub">
            <h1>Boost Your Business</h1>
            <h2>With New Tech</h2>
          </div>

          <p>
            Our team can assist you in transforming your busness through <br />
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

          <button className="btnco btng">How We Works</button>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
