import React from 'react';
import { mount } from 'enzyme';
import Swing from '../swing';

describe('Swing', () => {
  it('should render', () => {
    const wrapper = shallow(<Swing>Swing</Swing>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should receive duration prop', () => {
    const wrapper = mount(<Swing duration={3}>Swing</Swing>);

    expect(wrapper.props().duration).toEqual(3);
  });
  it('should receive fillMode prop', () => {
    const wrapper = mount(<Swing fillMode="both">Swing</Swing>);
    expect(wrapper.props().fillMode).toEqual("both");
  });
  it('should receive transformOrigin prop', () => {
    const wrapper = mount(<Swing transformOrigin="center">Swing</Swing>);
    expect(wrapper.props().transformOrigin).toEqual("center");
  });
  it('should render correctly when infinite', () => {
    const wrapper = mount(<Swing infinite>Swing</Swing>);

    expect(wrapper.props().infinite).toBe(true);
  });
});
