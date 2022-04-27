import React, {useState} from 'react'

 function HookDemo1() {
  let initialValue=40
  let [tickets,setTickets]=useState(initialValue)

  return (

    <div>
        <h3>React useStateHook</h3>
        <h4>Total Tickets : {tickets}</h4>
        <button onClick={()=>setTickets((prevTicket)=>prevTicket-1)} className='btn btn-primary m-2'>Book Ticket</button>
        <button onClick={()=>setTickets((prevTicket)=>prevTicket+10)} className='btn btn-info m-2'>Add 10 Tickets</button>
        <button onClick={()=>setTickets((prevTicket)=>prevTicket-10)} className='btn btn-info m-2'>Book 10 Tickets</button>
        <button onClick={()=>setTickets(initialValue)} className='btn btn-danger'>Reset Ticket Count</button>
    </div>
  )
}

export default HookDemo1
