import solu1 from "../assets/solu1.png";
import solu2 from "../assets/solu2.png";
import solu3 from "../assets/solu3.png";
import solu4 from "../assets/solu4.png";
import solu5 from "../assets/solu5.png";
import solu6 from "../assets/solu6.png";

const Solution = () => {
  return (
    <div>
      <div className="solux">
        {" "}
        <div className="solution-info">
          <h5>OUR SERVICES</h5>
          <p>
            <strong>Perfect IT Solutions</strong> For Your Business
          </p>
        </div>
        <div className="solution-box">
          <div className="solution-cart1">
            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>IT Consultation</h6>
                <p>01</p>
              </div>

              <img src={solu1} alt="" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">Consultation</button>
                <button href="">Management</button>
              </div>
            </div>

            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>Data Security</h6>
                <p>02</p>
              </div>

              <img src={solu2} alt="" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">Management</button>
                <button href="">Backup</button>
                <button href="">Security</button>
              </div>
            </div>
            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>Website Development</h6>
                <p>03</p>
              </div>

              <img src={solu3} alt="" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">WordPress</button>
                <button href="">Theme</button>
                <button href="">Data</button>
              </div>
            </div>
          </div>
          <div className="solution-cart2">
            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>UI/UX Design</h6>
                <p>04</p>
              </div>

              <img src={solu4} alt="" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">Figma</button>
                <button href="">iOS & Android</button>
              </div>
            </div>
            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>Cloud Services</h6>
                <p>05</p>
              </div>

              <img src={solu5} alt="Description of your image" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">Backup</button>
                <button href="">Data</button>
              </div>
            </div>
            <div className="solution-sub">
              <div className="sub-head">
                {" "}
                <h6>Game Development</h6>
                <p>06</p>
              </div>

              <img src={solu6} alt="" />
              <p>
                Trust our top minds to eliminate workflow pain points, implement
                new tech & app.
              </p>
              <div className="solution-btn">
                {" "}
                <button href="">Unity 2D/3D</button>
                <button href="">iOS & Android</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
