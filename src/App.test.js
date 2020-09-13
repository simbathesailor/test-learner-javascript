import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("test via enzyme", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const wrapper = mount(<App />);

  console.log("wrapper", wrapper);

  const v = wrapper.find("input").simulate("change", {
    target: { value: "hello" },
  });

  expect(wrapper.find("input").getDOMNode().value).toBe("hello");

  wrapper.find("h1").simulate("click");

  const n = wrapper.find("span").getDOMNode().textContent.trim();

  expect(n).toBe("1");

  const m = wrapper.find("#test").getDOMNode().textContent;
  console.log("m", m);

  // console.log("v ", wrapper.state("text"));
});
