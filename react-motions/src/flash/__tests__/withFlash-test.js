import React from 'react';
import withFlash from '../withFlash';

describe('withFlash', () => {
  it('should render', () => {
    const wrapper = shallow(withFlash(<div>Flash</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
