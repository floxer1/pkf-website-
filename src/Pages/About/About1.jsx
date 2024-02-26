import bluedc from "../About/Asssets_About/jkRC-removebg-preview.png";

export const About1 = () => {
  return (
    <div id="about1">
      <div className="dic-img">
        <div className="dic-img-info">
          <h3>
            A letter from our <br /> Director{" "}
          </h3>

          <h6>
            &quot; L&apos;Afrique regorge de talents extraordinaires, une
            richesse inestimable
            <br /> pour notre continent. Cultivons cette excellence africaine en
            donnant <br />
            du pouvoir à nos talents. Investir dans ces talents, c&apos;est
            investir dans
            <br /> l&apos;avenir de l&apos;Afrique. Libérons leur potentiel pour
            construire ensemble <br />
            une Afrique prospère et unie. L&apos;autonomisation des talents
            africains
            <br /> est la clé du développement. Ensemble, osons rêver et agir
            pour un <br />
            avenir meilleur pour notre continent.&quot;
            <p>
              Mr <strong>Joel KAMDEM TETO</strong>
            </p>
          </h6>
        </div>

        <div className="jkrc">
          <img src={bluedc} alt="" />
        </div>
      </div>
    </div>
  );
};
