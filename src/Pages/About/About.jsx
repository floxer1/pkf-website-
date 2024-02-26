import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { About1 } from "./About1";
import { About2 } from "./About2";
import { About3 } from "./About3";
import { About4 } from "./About4";
import { About5 } from "./About5";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="banner-bkg-img">
        <h1>About Us</h1>
      </div>
      <div className="fil">
        <Link to="about1" spy={true} smooth={true} duration={500}>
          Message
        </Link>
        <Link to="about2" spy={true} smooth={true} duration={500}>
          Who We Are
        </Link>
        <Link to="about3" spy={true} smooth={true} duration={500}>
          Our Senior Staff
        </Link>
        <Link to="about4" spy={true} smooth={true} duration={500}>
          Get In Touch
        </Link>
        <Link to="about5" spy={true} smooth={true} duration={500}>
          Our Work
        </Link>
      </div>
      <div className="aboutinfo">
        <h5>
          Innovating Together And Restoring Africa&apos;s <br /> Dignity through
          Technology.
        </h5>
        <p>
          Movement is what we power. It’s our lifeblood. It runs through our
          veins. It’s what gets us out of bed each morning.
          <br /> It pushes us to constantly reimagine how we can move better.
          For you. For all the places you want to go. For all the <br />
          things you want to get. For all the ways you want to earn. Across the
          entire world. In real time. <br />
          At the incredible speed of now.
        </p>{" "}
        <div className="about-info-dropdown" onClick={toggleShowMore}>
          <h6>Read More</h6>
          <FontAwesomeIcon icon={faChevronDown} />
          {showMore && (
            <p className="hidden-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          )}
        </div>
      </div>
      <About1 />
      <div id="about-group">
        <About2 />
        <About3 />
        <About4 />
      </div>
      <About5 />
    </div>
  );
};
