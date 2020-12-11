import React from "react";
import Project from "./Project/Project";
import "./Projects.scss";
import hqheroScreenshot from "../../assets/images/hqhero-screenshot.png";
import covidScreenshot from "../../assets/images/covid-screenshot.png";
import kekamoScreenshot from "../../assets/images/kekamo-screenshot.png";

const Projects: React.FC = () => {
  return (
    <div className="Projects" id="projects">
      <div className="title">
        3. Things I've <span className="built">Built</span>
      </div>
      <Project
        title="COVID-19 Analyser"
        description="Developed the frontend for a breakthrough COVID-19 diagnosis machine."
        tags={["Angular", "ASP.NET", "Websockets"]}
        image={covidScreenshot}
      />
      <Project
        title="Kekamo"
        description="Created an online store that sells 'spiralised' posters of uploaded images."
        tags={["React", "Redux", "Typescript"]}
        image={kekamoScreenshot}
      />
      <Project
        title="HQHero"
        description="Designed and developed the frontend to a popular quiz helper with +300k page views."
        tags={["Angular", "SCSS"]}
        image={hqheroScreenshot}
      />
    </div>
  );
};

export default Projects;
