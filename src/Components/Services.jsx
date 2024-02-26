import { useEffect } from "react";
import sb1 from "../assets/sb1.png";
import sb2 from "../assets/sb2.png";
import sb3 from "../assets/sb3.png";
import sb4 from "../assets/sb4.png";
import sb5 from "../assets/sb5.png";
import { Link } from "react-router-dom";

const Services = () => {
  const handleCounters = () => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 5000; // Adjust interval as needed

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute("data-val"));
      const duration = Math.floor(interval / endValue);

      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  useEffect(() => {
    handleCounters();
  }, []);

  return (
    <div className="service">
      <div className="service-img">
        <img src={sb1} alt="Description of your image" />
        <img src={sb2} alt="Description of your image" />
        <img src={sb3} alt="Description of your image" />
        <img src={sb4} alt="Description of your image" />
        <img src={sb5} alt="Description of your image" />
      </div>
      <div className="service-main">
        <div className="service-info">
          <h3>
            &quot;Technology is best <br />
            when it brings people together.&quot;
          </h3>
          <p>PATRICIA CROSS</p>
        </div>
        <div className="service-info1">
          <p>
            We can help to maintain and modernize your IT infrastructure &<br />{" "}
            solve various infrastructure-specific issues a business may face.
          </p>
          <p className="sub-info">
            {" "}
            iteck Co is the partner of choice for many of the worlds leading{" "}
            enterprises, SMEs, and technology challengers. We help businesses{" "}
            elevate their value through custom software development, product{" "}
            design, QA, and consultancy services.
          </p>
          <button className="service-button">
            <Link to="/about">More About Us </Link>{" "}
          </button>
        </div>
      </div>
      <div className="attributes">
        <div className="sub">
          {" "}
          <span className="num" data-val="20">
            000
          </span>
          <span className="ad">+</span>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="sub">
          {" "}
          <span className="num" data-val="15">
            15
          </span>
          <span className="ad">k</span>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="sub">
          {" "}
          <span className="num" data-val="240">
            000
          </span>
          <p>AWARDS ACHIEVED</p>
        </div>
        <div className="sub">
          <span className="num" data-val="180">
            000
          </span>
          <p>SATISFIED CLIENTS ON 24 COUNTRIES</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
