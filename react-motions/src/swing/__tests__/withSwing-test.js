import React from 'react';
import withSwing from '../withSwing';

describe('withSwing', () => {
  it('should render', () => {
    const wrapper = shallow(withSwing(<div>Swing</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
