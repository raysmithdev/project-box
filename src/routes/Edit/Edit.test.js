import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Edit from './Edit';

//TODO: write test for this component - uses context and props.match.params...
describe.skip(`Edit  component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Edit  />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});