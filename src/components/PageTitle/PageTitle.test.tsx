import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PageTitle } from ".";

afterEach(cleanup);

it("renders in an H1", () => {
  const { container } = render(<PageTitle title="Foo" />);

  const heading = container.querySelector("h1");

  expect(heading?.innerHTML).toBe("Foo");
});

it("renders the subtitle", () => {
  const { getByText } = render(<PageTitle title="Bar" subtitle="Foo" />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("renders a button", () => {
  const { getByText } = render(
    <PageTitle title="Bar" action={{ title: "Foo", url: "/" }} />
  );

  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});
