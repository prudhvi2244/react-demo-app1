import React,{Component} from 'react'

class Wish extends Component{

    constructor(props){
        super(props)
        this.state={
           eid:1,
           ename:"Prudhvi",
           ecity:"Mumbai"
        }
    }
  
    render(){
        let {eid,ename,ecity}=this.state
        let {cid,cname,city}=this.props
        return (
            <div>
                <h3>Employee ID : {eid}</h3>
                <h3>Employee Name : {ename}</h3>
                <h3>Employee City : {ecity}</h3>
                <hr/>
                <h3>Customer ID : {cid}</h3>
                <h3>Customer Name : {cname}</h3>
                <h3>Customer City : {city}</h3>
            </div>
        )
    }

}

export default Wish