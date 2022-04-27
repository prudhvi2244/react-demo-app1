import React, {useState,useEffect} from 'react'

export default function FetchAllEmployees() {
    let [employees,setEmployees]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/getAllEmployees")
             .then(response=>response.json())
             .then(data=>console.log(data))

    })

    return (
    <div>
        <h3>All Employees</h3>
        <hr/>
    </div>
  )
}
