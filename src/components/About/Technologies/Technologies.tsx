import React from "react";
import BulletPoint from "../../BulletPoint/BulletPoint";
import "./Technologies.scss";

export interface Technology {
  name: string;
  image: string;
}

interface Props {
  technologies: Technology[];
}

const Technologies: React.FC<Props> = (props) => {
  return (
    <div className="Technologies">
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className="grid">
        {props.technologies.map((technology, i) => (
          <div className="technology" key={i}>
            <BulletPoint />
            <img src={technology.image} alt={`${technology.name} logo`} />
            <div className="name">{technology.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
