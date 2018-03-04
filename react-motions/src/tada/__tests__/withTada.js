import React from 'react';
import withTada from '../withTada';

describe('withTada', () => {
  it('should renderer', () => {
    const wrapper = shallow(withTada(<div>Tada</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
