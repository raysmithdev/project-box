import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProjectForm from "./ProjectForm";

describe(`ProjectForm  component`, () => {
  it.skip("renders without crashing", () => {
    const extras = {
      params: {
        props: {
          edit: "N",
        },
      },
    };
    const wrapper = shallow(<ProjectForm {...extras} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
