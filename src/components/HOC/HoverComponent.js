import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

class HoverComponent extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
          <h3>HoverComponent</h3>
          <h4 onMouseOver={incrementCount}>Hovered {count} Times</h4>
      </div>
    )
  }
}

export default UpdatedComponent(HoverComponent)