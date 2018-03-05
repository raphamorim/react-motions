import React from 'react';
import withJello from '../withJello';

describe('withJello', () => {
  it('should render', () => {
    const wrapper = shallow(withJello(<div>Jello</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
