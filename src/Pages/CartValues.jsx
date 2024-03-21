import PropTypes from "prop-types";

export const CartValues = () => {
  return (
    <div className="midCon">
      <div className="containerx">
        <h2 className="mainHd tac">Our Values</h2>
        <div className="hdText tac">
          At Flexsin, we are driven by a set of shared values that drive
          equality, diversity, and a spirit to boldly challenge the unknown. We
          partner with our employees and work together with them to improve
          professional outcomes.
        </div>
        <ul className="ourCustomers  tac">
          <ValueItem
            iconSrc="https://www.flexsin.com/images/bold-icon.png"
            title="Bold"
            description="We guide and enable our team to reshape perceptions, think bigger, be bolder, and push the boundaries of what is possible."
          />
          <ValueItem
            iconSrc="https://www.flexsin.com/images/unique-icon.png"
            title="Unique"
            description="Leadership along with employees, celebrates and cultivates differentiation, diversity, and a new way of thinking that transforms growth trajectories."
          />
          <ValueItem
            iconSrc="https://www.flexsin.com/images/transparency-icon.png"
            title="Transparency"
            description="Employees are focused in their engagement with customers and are committed to helping them improve outcomes ethically."
          />
          <ValueItem
            iconSrc="https://www.flexsin.com/images/employee-first-icon.png"
            title="Employee-First"
            description="Our radical management methodology and diversified work culture put employees at the helm of everything we do and deliver."
          />
          <ValueItem
            iconSrc="https://www.flexsin.com/images/continuous-growth-icon.png"
            title="Continuous Growth"
            description="The leadership guides employees to improve their efficiency and helps them learn skills that unlock new frontiers of growth."
          />
          <ValueItem
            iconSrc="https://www.flexsin.com/images/well-being-icon.png"
            title="Well-Being"
            description="We prioritize the professional, emotional, and physical well-being of our employees and support them in all possible ways."
          />
        </ul>
      </div>
    </div>
  );
};

const ValueItem = ({ iconSrc, title, description }) => {
  return (
    <li>
      <div className="inner ">
        <span className="icon">
          <img src={iconSrc} alt={title} />
        </span>
        <h4 className="blockHd">{title}</h4>
        <div className="blockText">{description}</div>
      </div>
    </li>
  );
};

// Prop types validation
ValueItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CartValues;
