import React from 'react'

function withSequence( ...components ) {
  return components.reverse().reduce((prevComp, nextComp) => {
    const prevDuration =
      prevComp.props &&
      prevComp.props.style &&
      prevComp.props.style.animationDuration || 0;

    const prevDelay =
      prevComp.props &&
      prevComp.props.style &&
      prevComp.props.style.animationDelay || 0;


    function toMilliseconds(input) {
      const text = input.toString();
      const regex = /(\d+)\s*(s?|ms?)/;
      const [, time, unit] = text.match(regex) || [];
      const timeInMs = unit === 's' ? time * 1000 : time;
      return parseInt(timeInMs);
    }

    const delay = [prevDuration, prevDelay]
      .reduce((current, total) => toMilliseconds(current) + toMilliseconds(total)) + 'ms';

    return delay ? withConfig(nextComp(prevComp), { delay }) : nextComp(prevComp);
  });
}

export default withSequence
