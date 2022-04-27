import React from 'react'

 function ListRendering() {

    let employees=[
        {
            eid:1,
            ename:"Raj",
            ecity:"Bangalore"
        },
        {
            eid:2,
            ename:"Rajeev",
            ecity:"Goa"
        },
        {
            eid:3,
            ename:"Ramesh",
            ecity:"Hyderabad"
        },
        {
            eid:4,
            ename:"Ravi",
            ecity:"Pune"
        },
        {
            eid:5,
            ename:"Rajesh",
            ecity:"Pune"
        }
    ]

  return (
    <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee City</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>(
                        <tr key={employee.eid}>
                            <td>{employee.eid}</td>
                            <td>{employee.ename}</td>
                            <td>{employee.ecity}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListRendering
