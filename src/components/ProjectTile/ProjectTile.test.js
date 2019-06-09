import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProjectTile from './ProjectTile';

describe(`ProjectTile Component`, () => {
  const project = {id: 1, img: 'blahs',}

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectTile />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no project', () => {
    const wrapper = shallow(<ProjectTile />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly given project prop', () => {
    const wrapper = shallow(<ProjectTile props={project} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})