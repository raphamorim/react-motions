import React from 'react';
import withBounce from '../withBounce';

describe('withBounce', () => {
  it('should render', () => {
    const wrapper = shallow(withBounce(<div>Bounce</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
