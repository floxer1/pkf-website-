import sb1 from "../assets/sb1.png";
import sb2 from "../assets/sb2.png";
import sb3 from "../assets/sb3.png";
import sb4 from "../assets/sb4.png";
import sb5 from "../assets/sb5.png";
const Services = () => {
  return (
    <div>
      <div className="service">
        <div className="service-img">
          <img src={sb1} alt="Description of your image" />
          <img src={sb2} alt="Description of your image" />
          <img src={sb3} alt="Description of your image" />
          <img src={sb4} alt="Description of your image" />
          <img src={sb5} alt="Description of your image" />
        </div>
        <div className="service-main">
          {" "}
          <div className="service-info">
            <h3>
              &quot;Technology is best <br /> when it brings people <br />{" "}
              together.&quot;
            </h3>
            <p>PATRICIA CROSS</p>
          </div>
          <div className="service-info1">
            <p>
              We can help to maintain and modernize your it infrastructure &{" "}
              <br />
              solve various infrastructure-specific issues a buisness may face.
            </p>
            <p className="sub-info">
              {" "}
              iteck Co is the partner of choice for many of the worlds leading{" "}
              <br />
              enterprises, SMEs and technology challengers.We help businesses{" "}
              <br />
              elevate their value through custom software development ,product{" "}
              <br />
              design,QA and consultancy services.
            </p>
            <button>More About Us</button>
          </div>
        </div>
        <div className="attributes">
          <div className="sub">
            {" "}
            <h2>20+</h2>
            <p>
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="sub">
            {" "}
            <h2>15 K</h2>
            <p>
              PROJECTS <br />
              COMPLETED
            </p>
          </div>
          <div className="sub">
            {" "}
            <h2>240</h2>
            <p>
              AWARDS <br /> ACHIEVED
            </p>
          </div>
          <div className="sub">
            <h2>180</h2>
            <p>
              SATISFIED CLIENTS <br />
              ON 24 COUNTRIES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
