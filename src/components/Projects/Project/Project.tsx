import React from "react";
import "./Project.scss";

interface Props {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  image: string;
}

const Project: React.FC<Props> = () => {
  return <div className="Project neu-card neu-mid"></div>;
};

export default Project;
