import server from "../About/Asssets_About/server.jpeg";
export const About3 = () => {
  return (
    <article className="about-x" id="about3">
      <div className="abt-sub1">
        <h4>Our Senior Staff</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod
          iusto ex tempora sed consequuntur architecto dignissimos eligendi
          veniam, voluptas quidem sunt cupiditate. Ad explicabo a eius ipsam
          repellat impedit.
        </p>
        <a href="">Learn More </a>
      </div>
      <div>
        <img src={server} alt="" className="abt-img" />
      </div>
    </article>
  );
};
