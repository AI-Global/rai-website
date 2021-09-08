import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ContentfulButton } from ".";

afterEach(cleanup);

const mockAction = {
  enabled: true,
  externalUrl: "https://eddysims.com",
  title: "Foo Button",
  external: true,
};

it("renders a proper button", () => {
  const { getByText } = render(<ContentfulButton action={mockAction} />);

  expect(getByText("Foo Button")).toBeInstanceOf(HTMLAnchorElement);
});

it("renders nothing if not enabled", () => {
  const { queryByText } = render(
    <ContentfulButton action={{ ...mockAction, enabled: false }} />
  );

  expect(queryByText("Foo Button")).toBeNull();
});

it("renders an external link", () => {
  const action = { ...mockAction, external: false, entrySlug: "//assets/foo" };
  const { getByText } = render(<ContentfulButton action={action} />);

  const button = getByText("Foo Button");

  expect(button.getAttribute("target")).toBe("_blank");
});
