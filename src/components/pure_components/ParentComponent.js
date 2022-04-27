import React, { Component} from 'react'
import PureComponent1 from './PureComponent1'
import RegComponent from './RegComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Prudhvi"
      }
    }

    componentDidMount() { 
        setInterval(()=>{
            this.setState({
                name:"Raj"
            })
        },5000)
     }

  render() {
      console.log("******** ParentComponent ************")
    return (
      <div>
          <h2>Parent Component</h2>
          <RegComponent name={this.state.name}/>
          <PureComponent1 name={this.state.name}/>  
      </div>
    )
  }
}

export default ParentComponent