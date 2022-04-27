import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         eid:"",
         ename:"",
         ecity:"",
         registered:false,
         id:""
      }
    }
  handleEid=(event)=>{
    this.setState({
        eid:event.target.value
    })
  }
  handleEname=(event)=>{
      this.setState({
          ename:event.target.value
      })
  }

  handleEcity=event=>{
    this.setState({
        ecity:event.target.value
    })
  }

  handleForm=event=>{
      event.preventDefault();
      console.log('Employee ID',this.state.eid)
      console.log('Employee Name',this.state.ename)
      console.log('Employee City',this.state.ecity)
      this.setState({
        id:this.state.eid,
        eid:"",
        ename:"",
        ecity:"",
        registered:true
      })
  }
  render() {
      let eid=this.state.eid
    return (
      <div>
          <h3>Employee Registration</h3>
          <hr/>
          <form onSubmit={this.handleForm}>
              <div className="form-group">
                <label>Employee ID</label>
                <input value={this.state.eid} type="text" onChange={this.handleEid} className="form-control"/>
              </div>
              <div className="form-group">
                <label>Employee Name</label>
                <input value={this.state.ename} onChange={this.handleEname} type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Employee City</label>
                <select value={this.state.ecity} type="text" onChange={this.handleEcity} className="form-control">
                    <option value="">--Select City--</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Goa">Goa</option>
                    <option value="Pune">Pune</option>
                </select>
              </div>
                <button className="btn btn-primary mt-3" type="submit">Register</button>
          </form>
          <br/>
          {
              this.state.registered && <h5 className="text-success">Employee With ID {this.state.id} Registered Successfully!</h5>
          }
      </div>
    )
  }
}

export default Registration