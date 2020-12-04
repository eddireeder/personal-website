import React from "react";
import Experience from "./Experience/Experience";
import "./Experiences.scss";
import watersLogo from "../../assets/images/waters-logo.png";

const Experiences: React.FC = () => {
  return (
    <div className="Experiences">
      <div className="title">
        Some Places I've <span className="worked">Worked</span>
      </div>
      <Experience
        role="Software Engineer"
        company="Waters"
        from="Dec 2019"
        to="Jan 2020"
        bullets={["Bullet 1.", "Bullet 2."]}
        image={watersLogo}
      />
    </div>
  );
};

export default Experiences;
