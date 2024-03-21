import "../search/search.scss";

export const Search = () => {
  return (
    <div>
      <div className="banner-search">
        <div className="banner-center-section">
          <h6 className="section-subtitle">We are #1 on the market</h6>
          <h1 className="text-center">Find your job build your career</h1>
          <p className="home-banner-description">
            We understand that for you, its never just a job. Its your business.
            Thats why we Possionate about not only finding you a quality
            employee. But also the perfect fit.
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
    </div>
  );
};

export default Search;
