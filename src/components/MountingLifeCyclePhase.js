import React, { Component } from 'react'

class MountingLifeCyclePhase extends Component {
    constructor(props) {
      super(props)
      this.state={

      }
    console.log('************** constructor *************')
      
    }

    static getDerivedStateFromProps(props, state) {
        console.log('********** getDerivedStateFromProps ***************')
        return {};
    }

  render() {
      console.log('************ render *************')
    return (
      <div>
          <h3>MountingLifeCyclePhase</h3>
            <hr/>
      </div>
    )
  }
 
  componentDidMount() { 
      console.log('********* componentDidMount ************')
   }


}

export default MountingLifeCyclePhase