import secu from "../assets/secu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-main">
        <div className="portfolio-text">
          <h4>PORTFOLIO</h4>
          <p>
            <strong>Latest Projects</strong> From Our Team
          </p>
        </div>
        <div className="portfolio-parent">
          <FontAwesomeIcon icon={faChevronLeft} className="chev" />
          <div className="portfolio-child">
            <img src={secu} alt="" />

            <div className="portfolio-subtext">
              <h3>Analys & Backup Blockchain</h3>
              <h6>DATA SECURITY , IT CONSULTATION , ITECK</h6>
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="port-btn">
                <button>Backup</button>
                <button>Data</button>
                <button>Security</button>
              </div>
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="chev" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
