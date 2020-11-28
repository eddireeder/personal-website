import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "./Project";
import hqheroScreenshot from "../../../assets/images/hqhero-screenshot.png";

const title = "Test Title";
const description = "Test description.";
const tags = ["Tag1", "Tag2"];

beforeEach(() => {
  render(
    <Project
      title={title}
      description={description}
      tags={tags}
      image={hqheroScreenshot}
    />
  );
});

test("renders the title", () => {
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test("renders the description", () => {
  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();
});

test("renders the tags", () => {
  tags.forEach((tag) => {
    const tagElement = screen.getByText(tag);
    expect(tagElement).toBeInTheDocument();
  });
});

test("renders the screenshot image", () => {
  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", hqheroScreenshot);
});
