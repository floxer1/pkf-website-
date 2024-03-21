import "../HomeWrap/HomeWrap.scss";

export const HomeNumberWrapper = () => {
  return (
    <div className="home-ctn-wrapper">
      <div className="home-number-wrapper">
        <div className="home-number-content">
          <h3 className="primary-text">
            How <span className="primary-text">Hired 128</span> Works
          </h3>
          <div className="paragraph-wrapper">
            <p className="paragraph-large">
              Do you know what could beat the exciting feeling of having a new
              computer? Make your own. Making your own computer from scratch is
              not only fun to do but cheaper as well.
            </p>
          </div>
        </div>
        <div className="home-numbers-list">
          <div className="number-con">
            <div className="home-number-card blue-card">
              <div className="number-circle white-circle">1</div>
              <h4 className="without-margin text-white">Resume Assessments</h4>
              <div className="paragraph-wrap-mt-20">
                <p className="paragraph-no-margin text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra vitae quam integer semper aenean.
                </p>
              </div>
            </div>
          </div>
          <div className="number-con">
            <div className="home-number-card">
              <div className="number-circle">2</div>
              <h4 className="without-margin">Job Fit Scoring</h4>
              <div className="paragraph-wrap-mt-20">
                <p className="paragraph-no-margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra vitae quam integer semper aenean.
                </p>
              </div>
            </div>
            <div className="home-number-card">
              <div className="number-circle">3</div>
              <h4 className="without-margin">Top-Notch Help</h4>
              <div className="paragraph-wrap-mt-20">
                <p className="paragraph-no-margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra vitae quam integer semper aenean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNumberWrapper;
