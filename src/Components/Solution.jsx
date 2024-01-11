import solu1 from "../assets/solu1.png";
import solu2 from "../assets/solu2.png";
import solu3 from "../assets/solu3.png";
import solu4 from "../assets/solu4.png";
import solu5 from "../assets/solu5.png";
import solu6 from "../assets/solu6.png";

const Solution = () => {
  return (
    <div className="solux">
      <div className="solution-info">
        <h5>OUR SERVICES</h5>
        <p>
          <strong>Perfect IT Solutions</strong> For Your Business
        </p>
      </div>
      <div className="solution-box">
        <div className="solution-cart1">
          {renderSolutionSub("IT Consultation", "01", solu1, [
            "Consultation",
            "Management",
          ])}
          {renderSolutionSub("Data Security", "02", solu2, [
            "Management",
            "Backup",
            "Security",
          ])}
          {renderSolutionSub("Website Development", "03", solu3, [
            "WordPress",
            "Theme",
            "Data",
          ])}
        </div>
        <div className="solution-cart2">
          {renderSolutionSub("UI/UX Design", "04", solu4, [
            "Figma",
            "iOS & Android",
          ])}
          {renderSolutionSub("Cloud Services", "05", solu5, ["Backup", "Data"])}
          {renderSolutionSub("Game Development", "06", solu6, [
            "Unity 2D/3D",
            "iOS & Android",
          ])}
        </div>
      </div>
    </div>
  );
};
const renderSolutionSub = (title, number, image, buttons) => (
  <div className="solution-sub" key={number}>
    <div className="sub-head">
      <h6>{title}</h6>
      <p>{number}</p>
    </div>
    <img src={image} alt="" />
    <p>
      Trust our top minds to eliminate workflow pain points, implement new tech
      & app.
    </p>
    <div className="solution-btn">
      {buttons.map((button, index) => (
        <button key={index} href="">
          {button}
        </button>
      ))}
    </div>
  </div>
);

export default Solution;
