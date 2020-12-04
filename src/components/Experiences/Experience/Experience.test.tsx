import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "./Experience";
import watersLogo from "../../../assets/images/waters-logo.png";

const role = "Test Role";
const company = "Test Company";
const from = "Jun 2012";
const to = "Present";
const bullets = ["Test activity 1.", "Test activity 2.", "Test activity 3."];

beforeEach(() => {
  render(
    <Experience
      role={role}
      company={company}
      from={from}
      to={to}
      bullets={bullets}
      image={watersLogo}
    />
  );
});

test("renders the title", () => {
  const titleElement = screen.getByText(`${role} @ ${company}`);
  expect(titleElement).toBeInTheDocument();
});

test("renders the date range", () => {
  const descriptionElement = screen.getByText(`${from} - ${to}`);
  expect(descriptionElement).toBeInTheDocument();
});

test("renders the bullets", () => {
  bullets.forEach((bullet) => {
    const bulletElement = screen.getByText(bullet);
    expect(bulletElement).toBeInTheDocument();
  });
});

test("renders the logo", () => {
  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", watersLogo);
});
