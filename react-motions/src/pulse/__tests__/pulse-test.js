import React from 'react';
import { mount } from 'enzyme';
import Pulse from '../pulse';

describe('Pulse', () => {
  it('should render', () => {
    const wrapper = shallow(<Pulse>Pulse</Pulse>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Pulse duration={3}>Pulse</Pulse>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Pulse fillMode="both">Pulse</Pulse>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Pulse infinite>Pulse</Pulse>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
