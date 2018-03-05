import React from 'react';
import withRubberBand from '../withRubberBand';

describe('withRubberBand', () => {
  it('should render', () => {
    const wrapper = shallow(withRubberBand(<div>rubberBand</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
