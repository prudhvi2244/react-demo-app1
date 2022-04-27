function Greet(props) {
  let colors=["Blue","Green","Orange","Yellow"]
  let employees=[
    {eid:1,ename:"Prudhvi",ecity:"Pune"},
    {eid:2,ename:"Praveen",ecity:"Hyderabad"},
    {eid:3,ename:"Kiran",ecity:"Mumbai"}
  ]
  return(
    
  <div >
    <h1>Welcome To React JS Functional Component!</h1>
    <hr/>
    <ul className="list-group">
      {
        colors.map(color=><li className="list-group-item">{color}</li>)
      }
    </ul>
    <hr/>
    <button className="btn btn-success m-2">Add Employee</button>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(employee=><tr>
          <td>{employee.eid}</td>
          <td>{employee.ename}</td>
          <td>{employee.ecity}</td>
          <td>
            <button className="btn btn-primary mr-2">Edit</button> | 
            <button className="btn btn-danger">Delete</button>
          </td>
          </tr>)
        }
      </tbody>
    </table>
  </div>
  )
}

export default Greet;
