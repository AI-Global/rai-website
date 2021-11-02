import * as Gatsby from "gatsby";
import { cleanup } from "@testing-library/react";
import { useMicroContent } from "./useMicroContent";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

beforeEach(() => jest.clearAllMocks);
afterEach(() => cleanup);

const firstVal = {
  key: "first",
  value: "one",
};

const secondVal = {
  key: "second",
  value: "two",
};

const data = {
  microContent: {
    nodes: [firstVal, secondVal],
  },
};

it("returns an empty array if no data", () => {
  useStaticQuery.mockImplementation(() => undefined);

  const result = useMicroContent();
  expect(result).toStrictEqual([]);
});

it("returns all nodes when called", () => {
  useStaticQuery.mockImplementation(() => data);

  const result = useMicroContent();
  expect(result).toStrictEqual(data.microContent.nodes);
});

it("returns the proper value when filter is set", () => {
  useStaticQuery.mockImplementation(() => data);

  const [result] = useMicroContent(secondVal.key);
  expect(result).toStrictEqual(secondVal);
});
