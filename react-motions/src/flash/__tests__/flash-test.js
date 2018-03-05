import React from 'react';
import { mount } from 'enzyme';
import Flash from '../flash';

describe('Flash', () => {
  it('should render', () => {
    const wrapper = shallow(<Flash>Flash</Flash>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Flash duration={3}>Flash</Flash>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Flash fillMode="both">Flash</Flash>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Flash infinite>Flash</Flash>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
