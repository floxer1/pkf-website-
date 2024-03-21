import spring from "../assets/springio-ar21.svg";
import react from "../assets/reactjs-ar21.svg";
import java from "../assets/java-ar21.svg";
import flutter from "../assets/flutterio-ar21.svg";
import angular from "../assets/angular-ar21.svg";
import figma from "../assets/figma-ar21.svg";
import html from "../assets/w3_html5-ar21.svg";
import python from "../assets/python-ar21.svg";
import cf from "../assets/1685205484622 (1).jpeg";
import Solution from "../Components/Solution";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import sara from "../assets/300x0w.png";
import sara1 from "../assets/Sara v2-demo.e3d99c3bc0bdf7c01e42.jpg";
import rc from "../assets/template homepage PKFREC Website.f3b2ac8295ff3ac51500.jpg";
import rc1 from "../assets/LC.png";
import af from "../assets/Site-Web.png";
import af1 from "../assets/Slides_2021_Institution-ENG2_resize.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoplaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Adjust the speed as needed
    lazyLoad: true,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="blog-carousel">
          <div className="blog-info">
            <div className="blog-ctn1">
              <div className="blog-subimg">
                <img src={sara1} alt="" />
              </div>
              <div className="blog-title">
                {" "}
                <h2>SARA by Afriland Cameroon</h2>
              </div>
            </div>
            <div className="features">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dolores ipsum debitis nostrum consequuntur mollitia unde
                excepturi commodi, ea quia totam assumenda repudiandae incidunt
                id cupiditate porro veritatis necessitatibus exercitationem.
              </p>
              <div className="blog-ft">
                <h2>Features</h2>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Lastest IT Solution & Integration with Blockchain
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Over 100+ Payment Gateways Support
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  AI Machine & Deep Learning
                </h5>
              </div>
              <div className="blog-center">
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
          <div className="blog-image">
            <img src={sara} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="blog-carousel">
          <div className="blog-info">
            <div className="blog-ctn1">
              <div className="blog-subimg">
                <img src={rc1} alt="" />
              </div>
              <div className="blog-title">
                {" "}
                <h2>SARA by Afriland Cameroon</h2>
              </div>
            </div>
            <div className="features">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dolores ipsum debitis nostrum consequuntur mollitia unde
                excepturi commodi, ea quia totam assumenda repudiandae incidunt
                id cupiditate porro veritatis necessitatibus exercitationem.
              </p>
              <div className="blog-ft">
                <h2>Features</h2>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Lastest IT Solution & Integration with Blockchain
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Over 100+ Payment Gateways Support
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  AI Machine & Deep Learning
                </h5>
              </div>
              <div className="blog-center">
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
          <div className="blog-image2">
            <img src={rc} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="blog-carousel">
          <div className="blog-info">
            <div className="blog-ctn1">
              <div className="blog-subimg">
                <img src={af1} alt="" />
              </div>
              <div className="blog-title">
                {" "}
                <h2>SARA by Afriland Cameroon</h2>
              </div>
            </div>
            <div className="features">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dolores ipsum debitis nostrum consequuntur mollitia unde
                excepturi commodi, ea quia totam assumenda repudiandae incidunt
                id cupiditate porro veritatis necessitatibus exercitationem.
              </p>
              <div className="blog-ft">
                <h2>Features</h2>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Lastest IT Solution & Integration with Blockchain
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Over 100+ Payment Gateways Support
                </h5>
              </div>
              <div className="blog-center">
                <h5>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  AI Machine & Deep Learning
                </h5>
              </div>
              <div className="blog-center">
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
          <div className="blog-image2">
            <img src={af} alt="" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export const Action = () => {
  return (
    <div>
      <div className="act-banner">
        <div className="act-info1">
          <h1>Research Center</h1>
          <h2>Service Hub</h2>
          <div className="act-lien">
            <a href="" className="btncp btnx">
              Contact Us
            </a>
            <a href="">Need Help Contact Us </a>
          </div>
        </div>
      </div>
      <div className="abt-info">
        <div className="abt-info-img">
          <img src={cf} alt="" />
        </div>
        <div className="abt-info2">
          {" "}
          <h5>Why Choose Us </h5>
          <h3>Who Are We?</h3>
          <p>
            At PKFokam Research Center, we are dedicated to advancing software
            engineering, technology, and innovation to restore African dignity
            and empower the continents future.{" "}
          </p>
          <p>
            {" "}
            Our research center harnesses the power of collaboration, learning,
            and agility to drive meaningful change and create lasting impact.
          </p>{" "}
          <p>
            We prioritize customer centric and quality in everything we do, as
            we work together to build a brighter, more connected Africa.
          </p>
          <button className="btncp btnx"> Company Overview </button>
        </div>
      </div>
      <Solution />
      <div className="blog">
        <h2>
          {" "}
          <strong>What We Have</strong> Done ?
        </h2>

        <div>
          <AutoplaySlider />
        </div>
      </div>
      <div className="container-act">
        <h3>
          {" "}
          <strong>Our Cores</strong> Technologies
        </h3>
        <div className="logos">
          <div className="logos_slide">
            <img src={spring} alt="" />
            <img src={react} alt="" />
            <img src={java} alt="" />
            <img src={flutter} alt="" />
            <img src={angular} alt="" />
            <img src={figma} alt="" />
            <img src={html} alt="" />
            <img src={python} alt="" />
          </div>
          <div className="logos_slide">
            <img src={spring} alt="" />
            <img src={react} alt="" />
            <img src={java} alt="" />
            <img src={flutter} alt="" />
            <img src={angular} alt="" />
            <img src={figma} alt="" />
            <img src={html} alt="" />
            <img src={python} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
