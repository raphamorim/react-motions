import React from 'react';
import withShake from '../withShake';

describe('withShake', () => {
  it('should render', () => {
    const wrapper = shallow(withShake(<div>Shake</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
