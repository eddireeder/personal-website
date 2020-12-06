import React from "react";
import "./About.scss";
import exeterLogo from "../../assets/images/exeter-logo.png";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="title">
        About <span className="me">Me</span>
      </div>
      <div className="neu-card neu-mid">
        <div className="text">
          <p>Hi! I’m Edward, a software engineer based in London.</p>
          <p>
            I’m addicted to taking projects from idea, to design, to completion.
            Whether a simple native app, or a scalable microservice-based web
            application.
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
    </div>
  );
};

export default About;
