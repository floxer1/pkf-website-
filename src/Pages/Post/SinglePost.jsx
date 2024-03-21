import "./SinglePosts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const SinglePost = () => {
  return (
    <div className="job-container">
      <div className="categories-container">
        <h1>
          Available <span>Jobs</span>
        </h1>
        <h2>All Categories</h2>
        <div className="category-cart">
          <div className="category-sub1">
            <h3 className="category-title">QA Designer</h3>
            <div className="category-location">
              <p className="data-detail">Yaounde,Tradex Emana</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <div className="catogory-data">
            <p className="data-detail">Type: Full-Time </p>
            <p className="data-detail">Positions: 05</p>
            <p className="data-detail">Posted: 14/03/2024</p>
            <p className="data-detail">Last Applied: 31/03/2024</p>
            <div className="catogory-btns">
              <button
                type="button"
                className="catogory-btn focused "
                data-href="   "
              >
                Apply Now
              </button>
              <a href="" type="button" className="catogory-btn">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="category-cart">
          <div className="category-sub1">
            <h3 className="category-title">QA Designer</h3>
            <div className="category-location">
              <p className="data-detail">Yaounde,Tradex Emana</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <div className="catogory-data">
            <p className="data-detail">Type: Full-Time </p>
            <p className="data-detail">Positions: 05</p>
            <p className="data-detail">Posted: 14/03/2024</p>
            <p className="data-detail">Last Applied: 31/03/2024</p>
            <div className="catogory-btns">
              <button
                type="button"
                className="catogory-btn focused "
                data-href="   "
              >
                Apply Now
              </button>
              <a href="" type="button" className="catogory-btn">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="category-cart">
          <div className="category-sub1">
            <h3 className="category-title">QA Designer</h3>
            <div className="category-location">
              <p className="data-detail">Yaounde,Tradex Emana</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <div className="catogory-data">
            <p className="data-detail">Type: Full-Time </p>
            <p className="data-detail">Positions: 05</p>
            <p className="data-detail">Posted: 14/03/2024</p>
            <p className="data-detail">Last Applied: 31/03/2024</p>
            <div className="catogory-btns">
              <button
                type="button"
                className="catogory-btn focused "
                data-href="   "
              >
                Apply Now
              </button>
              <a href="" type="button" className="catogory-btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
