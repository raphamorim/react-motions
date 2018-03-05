import React from 'react';
import { mount } from 'enzyme';
import Jello from '../jello';

describe('Jello', () => {
  it('should render', () => {
    const wrapper = shallow(<Jello>Jello</Jello>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Jello duration={3}>Jello</Jello>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Jello fillMode="both">Jello</Jello>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should receive transformOrigin prop', () => {
    const wrapper = mount(<Jello transformOrigin="center">Jello</Jello>);
    expect(wrapper.props().transformOrigin).toEqual("center");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Jello infinite>Jello</Jello>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
