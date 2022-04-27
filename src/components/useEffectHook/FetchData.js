import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FetchData() {

   const [post,setPost]= useState({})
   const [id,setId]= useState(0)
   const [btnId,setBtnId]= useState()

   useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>
                {
                    setPost(response.data)
                    console.log(response)
                })
            .catch(error=>console.log(error))
   },[btnId])
  return (
    <div>
        <h3>useEffect Demo</h3>
        <hr/>
        ID :<input value={id} onChange={e=>setId(e.target.value)} className='form-control'/>
        <button onClick={()=>setBtnId(id)} className='btn btn-primary mt-2'>Get Data</button>
        <br/><br/>
        <h4>ID : {post.id}</h4>
        <h4>Title : {post.title}</h4>
        <h4>Body : {post.body}</h4>
    </div>
  )
}
