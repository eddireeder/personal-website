import React from "react";
import Experience from "./Experience/Experience";
import "./Experiences.scss";
import watersLogo from "../../assets/images/waters-logo.png";
import alelionLogo from "../../assets/images/alelion-logo.png";

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
        to="Present"
        bullets={[
          "Developed the frontend for a breakthrough COVID-19 diagnosis machine.",
          "Worked with the AME team in daily sprints and activities.",
          "Learnt ASP.NET and to write robust automated tests in Gherkin.",
        ]}
        image={watersLogo}
      />
      <Experience
        role="Software Engineer"
        company="Alelion"
        from="Jul 2017"
        to="Aug 2018"
        bullets={[
          "Developed the frontend for a breakthrough COVID-19 diagnosis machine.",
          "Worked with the AME team in daily sprints and activities.",
          "Learnt ASP.NET and to write robust automated tests in Gherkin.",
        ]}
        image={alelionLogo}
      />
    </div>
  );
};

export default Experiences;
