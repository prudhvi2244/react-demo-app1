import React, {useEffect,useState} from 'react'

export default function () {
    let [posts,setPosts]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
             .then(response=>response.json())
             .then(data=>{
                 setPosts(data)
                 console.log(data)
                })
             .catch(error=>console.log(error))
    },[])

   return (
    <div>
        <h3>React useEffect Hook Demo</h3>
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
                    posts.map(post=><tr key={post.id}><td>{post.userId}</td><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td></tr>)
                }
            </tbody>
        </table>
    </div>
  )
}
