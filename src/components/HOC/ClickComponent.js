import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

class ClickComponent extends Component {
    
  render() {
      const {count,incrementCount}=this.props
    return (
      <div>
          <h3>Click Component</h3>
          <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickComponent)