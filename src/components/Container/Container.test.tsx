import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Container } from ".";

afterEach(cleanup);

it("should render children correctly", () => {
  const { container } = render(<Container>Foo</Container>);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="container"
      >
        Foo
      </div>
    </div>
  `);
});
