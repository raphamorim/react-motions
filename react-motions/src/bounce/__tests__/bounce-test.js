import React from 'react';
import { mount } from 'enzyme';
import Bounce from '../bounce';

describe('Bounce', () => {
  it('should render', () => {
    const wrapper = shallow(<Bounce>Bounce</Bounce>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Bounce duration={3}>Bounce</Bounce>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Bounce fillMode="both">Bounce</Bounce>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should receive transformOrigin prop', () => {
    const wrapper = mount(<Bounce transformOrigin="center bottom">Bounce</Bounce>);
    expect(wrapper.props().transformOrigin).toEqual("center bottom");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Bounce infinite>Bounce</Bounce>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
