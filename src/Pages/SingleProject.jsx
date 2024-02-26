import sara from "../assets/300x0w.png";
import sara1 from "../assets/Sara v2-demo.e3d99c3bc0bdf7c01e42.jpg";
import rc from "../assets/template homepage PKFREC Website.f3b2ac8295ff3ac51500.jpg";
import rc1 from "../assets/LC.png";
import af from "../assets/Site-Web.png";
import af1 from "../assets/Slides_2021_Institution-ENG2_resize.jpg";
import { Search } from "../Pages/Search";

export const SingleProject = () => {
  return (
    <div>
      <div className="pr-banner">
        <Search />
        <h1>Projects</h1>
        <p>
          Building a Technological Legacy for Africa: Bridging Innovation,
          Transforming Lives, and Pioneering Progress.
        </p>
      </div>
      <div className="project-section">
        <div className="project-list">
          <div className="sarav1">
            <div className="sara-bg">
              <div className="sara-1">
                <div>
                  <img src={sara1} alt="" />
                </div>
                <div>
                  <h2>Sara By Afriland Cameroon </h2>
                  <p>
                    manage your bank wallet from your phone anywhere from your
                    mobile device with a simple a interactive ui
                  </p>
                  <a href="">Demo</a>
                </div>
              </div>
              <div className="sara-2">
                <div>
                  <img src={sara} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rc-web">
            <div className="rc-bg">
              <div className="rc-2">
                <div>
                  <img src={rc} alt="" />
                </div>
              </div>
              <div className="rc-1">
                <div>
                  <h2>Pk fokam Research Center Website </h2>
                  <p>
                    manage your bank wallet from your phone anywhere from your
                    mobile device with a simple a interactive ui
                  </p>
                  <a href="">Demo</a>
                </div>
                <div>
                  <img src={rc1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="af-web">
            <div className="afweb-bg">
              <div className="afweb-1">
                <div>
                  <img src={af1} alt="" />
                </div>
                <div>
                  <h2>Sara By Afriland Cameroon </h2>
                  <p>
                    manage your bank wallet from your phone anywhere from your
                    mobile device with a simple a interactive ui
                  </p>
                  <a href="">Demo</a>
                </div>
              </div>
              <div className="afweb-2">
                <div>
                  <img src={af} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="site web"></div>
        </div>
      </div>
    </div>
  );
};
