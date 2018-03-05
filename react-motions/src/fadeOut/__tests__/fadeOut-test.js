import React from 'react';
import { mount } from 'enzyme';
import FadeOut from '../fadeOut';

describe('FadeOut', () => {
  it('should render', () => {
    const wrapper = shallow(<FadeOut>FadeOut</FadeOut>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<FadeOut duration={3}>FadeOut</FadeOut>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<FadeOut fillMode="both">FadeOut</FadeOut>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<FadeOut infinite>FadeOut</FadeOut>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
