import React from 'react';
import withFadeIn from '../withFadeIn';

describe('withFadeIn', () => {
  it('should render', () => {
    const wrapper = shallow(withFadeIn(<div>FadeIn</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
