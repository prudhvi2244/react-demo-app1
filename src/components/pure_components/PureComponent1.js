import React,{PureComponent} from 'react'

 class PureComponent1 extends PureComponent {
  render() {
    console.log('**** PureComponent ***')
    return (
      <div>
          <h3>PureComponent</h3>
          <h3>Welcome , {this.props.name}</h3>
      </div>
    )
  }
}

export default PureComponent1