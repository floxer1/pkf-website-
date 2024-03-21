import "../search/search.scss";

import CartValues from "../CartValues";
import HomeNumbers from "../HomeWrap/HomeNumberWrapper";
import SinglePost from "../Post/SinglePost";
import JobApplicationForm from "../JobForm/JobApplicationForm";

export const Search = () => {
  return (
    <div>
      <div className="banner-search">
        <div className="banner-center-section">
          <h6 className="section-subtitle">We are #1 on the market</h6>
          <h1 className="text-center">Find your job, build your career</h1>
          <p className="home-banner-description">
            We understand that for you, its never just a job. Its your business.
            Thats why were passionate about not only finding you a quality
            employee, but also the perfect fit.
          </p>
          <div className="buttons-wrapper center-position">
            <a
              href="/for-hiring/services"
              className="primary-button w-inline-block"
            >
              <div>Discover Jobs</div>
            </a>
            <a
              href="/contact-us-for-hiring"
              className="secondary-button w-inline-block"
            >
              <div>Free Consultation</div>
            </a>
          </div>
        </div>
      </div>
      <CartValues />
      <SinglePost />

      <HomeNumbers />

      <div className="section">
        <div className="base-container relative w-container">
          <div className="title-wrapper">
            <h2 className="text-center">
              More than <br />
              100,000+ <span className="primary-text">people</span> engaged
            </h2>
            <div className="paragraph-wrapper">
              <p className="paragraph-large">
                Do you know what could beat the exciting feeling of having a new
                computer? Make your own. Making your own computer from scratch
                is not only fun to do but cheaper as well.
              </p>
            </div>
            <div className="btn-wrap">
              <a
                href="/for-hiring/services"
                className="primary-button w-inline-block"
              >
                Post a Job
              </a>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/65c2be9400aa76dd17c68134/65c2be9400aa76dd17c681a6_Ellipse%20Bg%20Dashed.svg"
            loading="lazy"
            alt="Ellipse Background Dashed Lines"
            className="bg-ellipse"
          />
        </div>
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default Search;
