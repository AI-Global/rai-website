import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Banner } from ".";

afterEach(() => cleanup);

it("renders the banner content", () => {
  const { getByText } = render(<Banner>Foo</Banner>);
  expect(getByText("Foo")).toBeInstanceOf(HTMLDivElement);
});

it("renders with an aria label", () => {
  const { getByLabelText } = render(
    <Banner ariaLabel="Hello World">Foo</Banner>
  );
  expect(getByLabelText("Hello World")).toBeInstanceOf(HTMLDivElement);
});
