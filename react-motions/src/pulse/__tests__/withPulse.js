import React from 'react';
import withPulse from '../withPulse';

describe('withPulse', () => {
  it('should renderer', () => {
    const wrapper = shallow(withPulse(<div>Pulse</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
