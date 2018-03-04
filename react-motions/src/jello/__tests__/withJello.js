import React from 'react';
import withJello from '../withJello';

describe('withJello', () => {
  it('should renderer', () => {
    const wrapper = shallow(withJello(<div>Jello</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
