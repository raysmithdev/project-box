import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewProject from './ViewProject';

//TODO: write test for this component - uses context and this.props.match.params...
describe.skip(`View Project component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ViewProject />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
