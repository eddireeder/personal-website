import React from "react";
import { render, screen } from "@testing-library/react";
import Technologies, { Technology } from "./Technologies";
import angularLogo from "../../../assets/images/angular-logo.png";
import reactLogo from "../../../assets/images/react-logo.png";

const techList: Technology[] = [
  { name: "Angular Test", image: angularLogo },
  { name: "React Test", image: reactLogo },
];

beforeEach(() => {
  render(<Technologies technologies={techList} />);
});

test("renders technology names", () => {
  techList.forEach((tech) => {
    const nameElement = screen.getByText(tech.name);
    expect(nameElement).toBeInTheDocument();
  });
});

test("renders images with correct alt tag", () => {
  techList.forEach((tech) => {
    const imageElement = screen.getByAltText(`${tech.name} logo`);
    expect(imageElement).toHaveAttribute("src", tech.image);
  });
});
