import React, { Component } from 'react'
import axios from 'axios'
 class ListOfPosts extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          post:{}
       }
     }
     componentDidMount() { 
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {title:"React JS",body:"More Powerful Than Angular!"})
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
     }
  render() {
    return (
      <div>
         
      </div>
    )
  }
}

export default ListOfPosts