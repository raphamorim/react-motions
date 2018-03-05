import React from 'react';
import { mount } from 'enzyme';
import RubberBand from '../rubberBand';

describe('RubberBand', () => {
  it('should render', () => {
    const wrapper = shallow(<RubberBand>RubberBand</RubberBand>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<RubberBand duration={3}>RubberBand</RubberBand>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<RubberBand fillMode="both">RubberBand</RubberBand>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<RubberBand infinite>RubberBand</RubberBand>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
