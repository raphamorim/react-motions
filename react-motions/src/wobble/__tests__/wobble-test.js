import React from 'react';
import { mount } from 'enzyme';
import Wobble from '../wobble';

describe('Wobble', () => {
  it('should render', () => {
    const wrapper = shallow(<Wobble>Wobble</Wobble>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Wobble duration={3}>Wobble</Wobble>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Wobble fillMode="both">Wobble</Wobble>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Wobble infinite>Wobble</Wobble>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
