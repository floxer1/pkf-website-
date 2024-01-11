import peacock from "../assets/pkf webdite1stpict.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Homepage = () => {
  return (
    <div>
      <div className="home-info">
        <div className="home-text">
          <h4>DEV AGENCY</h4>
          <h1>PKF RESEARCH</h1>
          <h2>Center</h2>
          <p>
            We transform buisnesses of most major sectors with <br /> powerful
            and adaptable digital solutions that satisfy the <br /> needs of
            today.
          </p>
          <div className="home-btn">
            <a href="">our services</a>
            <div className="play">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p>
              Itecks <br />
              Showreels
            </p>
          </div>
        </div>
        <div className="main-pic">
          <img src={peacock} alt="Description of your image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
