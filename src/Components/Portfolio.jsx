import PropTypes from "prop-types";
import Slider from "react-slick";
import secu from "../assets/secu.png";
import secu1 from "../assets/post_008.jpg";
import secu2 from "../assets/ebk-afri.jpg";
import secu3 from "../assets/afri.jpg";
import secu4 from "../assets/build.jpg";
import secu5 from "../assets/paper.jpeg";

const PortfolioItem = ({ title, subtitle, description, image }) => {
  return (
    <div className="portfolio-main">
      <div className="portfolio-text">
        <h4>PORTFOLIO</h4>
        <p>
          <strong>Latest Projects</strong> From Our Team
        </p>
      </div>
      <div className="portfolio-parent">
        <div className="port-card">
          <div className="portfolio-child">
            <img src={image} alt="" />
          </div>

          <div className="portfolio-subtext">
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
            <p>{description}</p>
            <div className="port-btn">
              <button>Backup</button>
              <button>Data</button>
              <button>Security</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop types validation
PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const portfolioItems = [
    {
      title: "Blockchain Analysis & Backup",
      subtitle: "Ensuring Data Security & IT Consultation",
      description:
        "Rely on our expertise to tackle workflow challenges and introduce cutting-edge technology solutions.",
      image: secu,
    },

    {
      title: "Blockchain Analysis & Backup",
      subtitle: "Ensuring Data Security & IT Consultation",
      description:
        "Rely on our expertise to tackle workflow challenges and introduce cutting-edge technology solutions.",
      image: secu1,
    },
    {
      title: "Blockchain Analytics & Backup Services",
      subtitle: "Data Security & IT Consultation Expertise",
      description:
        "Trust our skilled professionals to streamline workflows and integrate new technologies seamlessly.",
      image: secu2,
    },
    {
      title: "Blockchain Assessment & Backup Solutions",
      subtitle: "Enhancing Data Security & IT Consultation",
      description:
        "Count on our top-tier team to alleviate workflow complexities and implement innovative technologies.",
      image: secu3,
    },

    {
      title: "Blockchain Audit & Backup Services",
      subtitle: "Optimizing Data Security & IT Consultation",
      description:
        "Partner with our experienced professionals to address workflow challenges and deploy advanced tech solutions.",
      image: secu4,
    },
    {
      title: "Blockchain Evaluation & Backup Strategies",
      subtitle: "Securing Data & IT Consultation",
      description:
        "Leverage our expertise to streamline workflows and enhance data security with the latest tech innovations.",
      image: secu5,
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
