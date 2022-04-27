import React, { Component, PureComponent } from 'react'

class EventBinding extends PureComponent{
    constructor(props) {
      super(props)    
      this.state = {
         message:"Welcome Guest"
      }
      //this.handleEvent=this.handleEvent.bind(this)
    }
    handleEvent=()=>{
      this.setState({
          message:"Thanks for subscribing!"
      })  
      console.log(this)
    }
  render() {
    return (
      <div>
          <h3>Binding Event Handlers</h3>
          <hr/>
          <h4>{this.state.message}</h4>
          {/* <button onClick={()=>this.handleEvent()}>Subscribe</button> */}
          {/* <button onClick={this.handleEvent.bind(this)}>Subscribe</button> */}
          {/* <button onClick={this.handleEvent}>Subscribe</button> */}
          <button onClick={this.handleEvent}>Subscribe</button>
      </div>
    )
  }
}

export default EventBinding