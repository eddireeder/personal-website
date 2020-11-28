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

const Project: React.FC<Props> = (props) => {
  return (
    <div className="Project neu-card neu-mid">
      <div className="information">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="tags">
          {props.tags.map((tag, i) => (
            <div className="tag" key={i}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <img className="screenshot" src={props.image}></img>
    </div>
  );
};

export default Project;
