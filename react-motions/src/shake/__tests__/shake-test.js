import React from 'react';
import { mount } from 'enzyme';
import Shake from '../shake';

describe('Shake', () => {
  it('should render', () => {
    const wrapper = shallow(<Shake>Shake</Shake>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Shake duration={3}>Shake</Shake>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Shake fillMode="both">Shake</Shake>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Shake infinite>Shake</Shake>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
