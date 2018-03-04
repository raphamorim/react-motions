import React from 'react';
import withShake from '../withShake';

describe('withShake', () => {
  it('should renderer', () => {
    const wrapper = shallow(withShake(<div>Shake</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
