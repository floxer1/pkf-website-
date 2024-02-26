import game from "../About/Asssets_About/game.jpeg";
export const About5 = () => {
  return (
    <div id="about5">
      <div className="card-container">
        <div className="row-card">
          <div className="header-abt">
            <h1>Company Info</h1>
          </div>{" "}
          <div className="content">
            <div className="card">
              <div className="img3">
                {" "}
                <img src={game} alt="" />
              </div>

              <div className="about-sub3 ">
                <h4>Our Work</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem eligendi dolores veniam, ipsum voluptatibus
                  debitis corrupti modi optio, pariatur voluptatum tempora velit
                  sint vitae enim id sapiente nostrum dicta. Praesentium!
                </p>
                <a href="">Learn More </a>
              </div>
            </div>
            <div className="card">
              <div className="img3">
                {" "}
                <img src={game} alt="" />
              </div>

              <div className="about-sub3">
                <h4>Services</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis molestiae suscipit illo officiis voluptas tenetur
                  impedit quod non, eaque omnis quas, consectetur aliquam
                  explicabo. Vel in deleniti pariatur excepturi quaerat?
                </p>
                <a href="">Learn More </a>
              </div>
            </div>
            <div className="card">
              <div className="img3">
                {" "}
                <img src={game} alt="" />
              </div>

              <div className="about-sub3">
                <h4>Ethics</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda fugiat nemo odio repellat vel porro sit,
                  necessitatibus itaque. Beatae eveniet consequatur repellat
                  labore quisquam explicabo cumque mollitia fugiat praesentium
                  nostrum!
                </p>
                <a href="">Learn More </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
