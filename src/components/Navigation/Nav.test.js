import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Navigation from './Nav'

describe(`Navigation component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Navigation />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
