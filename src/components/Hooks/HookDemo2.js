import React, {useState} from 'react'

 function HookDemo2() {
     let obj={firstName:'',lastName:''}
     let [name,setName]=useState(obj)

  return (
    <div>
    <h3>React useState Hook</h3>
     <div className='form-group'>
        <label>First Name</label>
        <input value={name.firstName} onChange={event=>setName({...name,firstName:event.target.value})} className='form-control'/>
     </div>
     <div className='form-group'>
        <label>Last Name</label>
        <input value={name.lastName} onChange={event=>setName({...name,lastName:event.target.value})} className='form-control'/>
     </div>
     <hr/>
     <h4>First Name : {name.firstName}</h4>
     <h4>Last Name : {name.lastName}</h4>
     <h5 className='text-danger'>{JSON.stringify(name)}</h5>
    </div>
  )
}

export default HookDemo2
