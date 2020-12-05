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
          "Write maintainable, well-tested code across the full stack with Angular and ASP.NET.",
          "Maximise test coverage by writing end-to-end tests using Specflow.",
          "Utilise my '10% time' to work on exciting company projects such as the COVID-19 Analyser.",
        ]}
        image={watersLogo}
      />
      <Experience
        role="Software Engineer"
        company="Alelion"
        from="Jul 2017"
        to="Aug 2018"
        bullets={[
          "Architected and built the main system dashboard using Angular, NodeJS and PostgreSQL.",
          "Presented weekly sprint demos and implemented feedback from clients and peers.",
          "Achieved an outstanding 91% in my employer's report.",
        ]}
        image={alelionLogo}
      />
    </div>
  );
};

export default Experiences;
