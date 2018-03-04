import React from 'react';
import withFadeOut from '../withFadeOut';

describe('withFadeOut', () => {
  it('should render', () => {
    const wrapper = shallow(withFadeOut(<div>FadeOut</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
