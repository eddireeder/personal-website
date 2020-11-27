import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "./Project";
import hqheroScreenshot from "../../../assets/images/hqhero-screenshot.png";

const title = "Test Title";
const description = "Test description.";
const tags = ["Tag1", "Tag2"];
const github = "https://github.com";
const link = "https://test.com";

beforeAll(() => {
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

test("hides github link when not given", () => {
  const githubIconElement = screen.queryByAltText("github");
  expect(githubIconElement).toBeNull();
});

test("renders github link when given", () => {
  <Project
    title={title}
    description={description}
    tags={tags}
    image={hqheroScreenshot}
    github={github}
  />;
  const githubIconElement = screen.getByAltText("github");
  expect(githubIconElement).toBeInTheDocument();
});

test("hides site link when not given", () => {
  const linkIconElement = screen.queryByAltText("link");
  expect(linkIconElement).toBeNull();
});

test("renders site link when given", () => {
  <Project
    title={title}
    description={description}
    tags={tags}
    image={hqheroScreenshot}
    link={link}
  />;
  const linkIconElement = screen.getByAltText("link");
  expect(linkIconElement).toBeInTheDocument();
});
