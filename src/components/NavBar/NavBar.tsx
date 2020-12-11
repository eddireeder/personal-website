import React from "react";
import "./NavBar.scss";
import { Link } from "react-scroll";

export interface NavBarLink {
  text: string;
  to: string;
}

interface Props {
  links: NavBarLink[];
}

const NavBar: React.FC<Props> = (props) => {
  return (
    <div className="NavBar">
      {props.links.map((link, i) => (
        <Link key={i} to={link.to} smooth={true}>
          {i + 1}. {link.text}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
