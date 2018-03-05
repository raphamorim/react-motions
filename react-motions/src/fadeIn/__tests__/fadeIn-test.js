import React from 'react';
import { mount } from 'enzyme';
import FadeIn from '../fadeIn';

describe('FadeIn', () => {
  it('should render', () => {
    const wrapper = shallow(<FadeIn>FadeIn</FadeIn>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<FadeIn duration={3}>FadeIn</FadeIn>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<FadeIn fillMode="both">FadeIn</FadeIn>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<FadeIn infinite>FadeIn</FadeIn>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
