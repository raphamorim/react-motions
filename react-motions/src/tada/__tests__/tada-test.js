import React from 'react';
import { mount } from 'enzyme';
import Tada from '../tada';

describe('Tada', () => {
  it('should render', () => {
    const wrapper = shallow(<Tada>Tada</Tada>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Tada duration={3}>Tada</Tada>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Tada fillMode="both">Tada</Tada>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Tada infinite>Tada</Tada>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
