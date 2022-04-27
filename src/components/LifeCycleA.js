import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        console.log('**** constructor ****')
      super(props)
    
      this.state = {
         name:"Prudhvi"
      }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      console.log('shouldComponentUpdate life cycle method')
      return false 
     }

     getSnapshotBeforeUpdate = (prevProps, prevState) => {
         console.log('getSnapshotBeforeUpdate life cycle method')
         return null;
     }

     componentDidUpdate()
        {
            console.log('LifeCycleA componentDidUpdate')
        }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps life cycle method')
        return null
    }

    componentDidMount() { 
        console.log('componentDidMount() life cycle method')
     }


     changeName=()=>{
         this.setState({name:"Raj"})
     }

  render() {
      console.log("***** render() life cycle method *****")
    return (
      <div>
          <h3>LifeCycleA Component</h3>
          <button onClick={this.changeName} className='btn btn-info mt-2'>Update State</button>
      </div>
    )
  }

  componentWillUnmount()
  {
      console.log('componentWillUnmount() life cycle method')
  }

}

export default LifeCycleA