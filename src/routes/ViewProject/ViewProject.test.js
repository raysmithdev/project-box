import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewProject from './ViewProject';

describe(`View Project component`, () => {
  it.skip("renders without crashing", () => {
    const wrapper = shallow(<ViewProject />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
