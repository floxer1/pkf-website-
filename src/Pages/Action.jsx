import spring from "../assets/spring.png";
import re from "../assets/re.png";
import java from "../assets/java.png";
import flutter from "../assets/fluttter.png";
import angular from "../assets/angular.png";

export const Action = () => {
  return (
    <div>
      <div className="act-banner">
        <div className="act-info1">
          <h1>
            Research Center <br /> Service Hub
          </h1>
          <div className="act-lien">
            <a href="" className="btncp btnx">
              Contact Us
            </a>
            <a href="">Need Help Contact Us </a>
          </div>
        </div>
      </div>
      <div className="container-act">
        <h3>Our Core Technologies</h3>
        <div className="row-act">
          <div className="act-img">
            <img src={spring} alt="" />
            <div className="act-sub">
              <h4>Spring</h4>
              <p>Mobile app developement</p>
            </div>
          </div>{" "}
          <div className="act-img">
            {" "}
            <img src={java} alt="" />
            <div className="act-sub">
              <h4>Java</h4>
              <p>Enterprise at scale</p>
            </div>
          </div>
          <div className="act-img">
            {" "}
            <img src={re} alt="" />
            <div className="act-sub">
              <h4>React JS</h4>
              <p>Modern web Frameworks</p>
            </div>
          </div>
        </div>
        <div className="row-act">
          <div className="act-img2">
            {" "}
            <img src={flutter} alt="" />
            <div className="act-sub">
              <h4>Flutter</h4>
              <p>Mobile app UI developement</p>
            </div>
          </div>
          <div className="act-img2">
            {" "}
            <img src={angular} alt="" />
            <div className="act-sub">
              <h4>Angular</h4>
              <p>SPA Developement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
