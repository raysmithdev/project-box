import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import New from './New'

describe(`New component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<New />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
