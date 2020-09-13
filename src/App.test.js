import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("test via enzyme", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  let wrapper = null;

  act(() => {
    wrapper = mount(<App />);
  });

  console.log("wrapper", wrapper);

  const v = wrapper.find("input").simulate("change", {
    target: { value: "hello" },
  });

  expect(wrapper.find("input").getDOMNode().value).toBe("hello");

  wrapper.find("h1").simulate("click");

  const n = wrapper.find("span").getDOMNode().textContent.trim();

  expect(n).toBe("1");

  // jest.fn((x) => {
  //   return {
  //     json: () => {
  //       return;
  //     },
  //   };
  // });

  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return {
          type: "lorem",
          format: "p",
          number: 20,
          number_max: 40,
          amount: 5,
          time: "19:29:35",
          text_out:
            "<p>Lorem ipsum mi nisi potenti scelerisque eu nec rhoncus tempus, dapibus mauris nec potenti interdum sem fermentum hendrerit, massa mollis nulla phasellus turpis nisi habitasse litora.</p> <p>Eleifend cursus odio arcu sollicitudin vestibulum duis mattis condimentum metus platea ultrices suspendisse diam sem proin blandit per, quisque arcu porta potenti faucibus integer nisl, aenean est aptent odio tellus ad fringilla odio tempor neque viverra donec tortor.</p> <p>Elementum dictum nullam curabitur tempus ipsum donec platea, massa auctor vivamus id inceptos eget cursus aptent, cubilia nec volutpat scelerisque imperdiet etiam curabitur nulla phasellus ac rutrum neque commodo, tempus interdum curabitur commodo elementum, nostra curabitur donec auctor aliquam.</p> <p>Donec fringilla quam felis pellentesque urna accumsan tempus aliquet, ornare donec platea bibendum vestibulum laoreet pretium sagittis aliquet, at non felis ligula consequat dui curabitur ornare etiam sem porttitor tincidunt ullamcorper lacinia himenaeos aenean.</p> <p>Felis potenti metus ipsum sagittis non quisque blandit lectus, faucibus venenatis vitae mollis curae enim ultricies, et praesent curae malesuada eleifend sed aenean.</p> ",
        };
      },
    });
  });

  let m = null;
  act(() => {
    m = wrapper.find("#test").simulate("click");
  });

  const contentAPI = wrapper.find("p").getDOMNode().innerHTML;

  console.log("contentAPI", contentAPI);

  // console.log("v ", wrapper.state("text"));
});
