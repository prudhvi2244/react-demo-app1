import React, { Component } from 'react'

class FetchAPIDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
        }
    }
    componentDidMount() { 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                if(response.ok){
                    return response.json()
                }
                throw response
            })
            .then(data=>{
                this.setState({
                    posts:data
                })
                console.log(data)
            })
            .catch(error=>{
                let errorMsg=''
                if(error.status==404){
                    errorMsg='OOPS The Page You are looking is Not Found'
                    console.log(errorMsg)
                    this.setState({error:errorMsg})
                    
                }
            })
            .finally(()=>console.log('Finally Executed!'))
     }
  render() {
    return this.state.posts.length?(
      <div>
          <h3>Fetch API</h3>
          <hr/>
          <table className='table table-bordered'>
              <thead>
                  <tr>
                      <th>UserID</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.posts.map(post=>
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>)
                  }
              </tbody>
          </table>
      </div>
    ):<div>
        <h3>No Posts</h3>
       <h5 className='text-danger'>{this.state.error}</h5>
      </div>
  }
}

export default FetchAPIDemo