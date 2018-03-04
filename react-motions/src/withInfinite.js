import React from 'react'

const withInfinite  = (Component) => class extends Component {
  static displayName = `WithInfinite(${
    Component.displayName || Component.name
  })`;

  render() {
    return (
      const style = {
        ...this.props.style,
        WebkitAnimationIterationCount: 'infinite',
        animationIterationCount: 'infinite',
      }

      <Component
        { ...this.props }
        style={style}
      />
    )
  }
}

export default withInfinite
