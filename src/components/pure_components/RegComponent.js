import React, { Component } from 'react'

class RegComponent extends Component {
  render() {
      console.log('*** RegComponent ***')
    return (
      <div>
          <h3>RegComponent</h3>
          <h3>Welcome , {this.props.name}</h3>
      </div>
    )
  }
}

export default RegComponent