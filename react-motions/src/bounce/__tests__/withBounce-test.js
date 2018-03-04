import React from 'react';
import withBounce from '../withBounce';

describe('withBounce', () => {
  it('should renderer', () => {
    const wrapper = shallow(withBounce(<div>Bounce</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
