import React from "react";
import "./About.scss";
import exeterLogo from "../../assets/images/exeter-logo.png";
import Technologies from "./Technologies/Technologies";
import typescriptLogo from "../../assets/images/typescript-logo.png";
import nodejsLogo from "../../assets/images/nodejs-logo.png";
import reactLogo from "../../assets/images/react-logo.png";
import cSharpLogo from "../../assets/images/c-sharp-logo.png";
import angularLogo from "../../assets/images/angular-logo.png";
import dockerLogo from "../../assets/images/docker-logo.png";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="title">
        1. About <span className="me">Me</span>
      </div>
      <div className="neu-card neu-mid">
        <div className="text">
          <p>Hi! I’m Edward, a software engineer based in London.</p>
          <p>
            I’m addicted to taking projects from idea, through design, to
            completion. Whether a native mobile app, or a microservice-based web
            application that scales.
          </p>
          <p>
            Shortly after graduating from{" "}
            <span className="highlight">University Of Exeter</span>, I started
            working @ <span className="highlight">Waters</span>, where I love
            writing modern, maintainable code using the latest frameworks.
          </p>
        </div>
        <img src={exeterLogo} alt="University Of Exeter logo" />
      </div>
      <Technologies
        technologies={[
          { name: "Typescript", image: typescriptLogo },
          { name: "Node.js", image: nodejsLogo },
          { name: "React", image: reactLogo },
          { name: "ASP.NET", image: cSharpLogo },
          { name: "Angular", image: angularLogo },
          { name: "Docker", image: dockerLogo },
        ]}
      />
    </div>
  );
};

export default About;
