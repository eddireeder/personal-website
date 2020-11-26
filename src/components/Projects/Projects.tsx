import React from "react";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="Projects">
      <div className="title">
        Some Things I've <span className="built">Built</span>
      </div>
      <Project/>
      <Project/>
    </div>
  );
}

export default Projects;
