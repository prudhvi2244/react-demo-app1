import React, {useState} from 'react'

export default function () {

  let [items,setItems]=useState([])

  function addItems(){
    setItems([...items,{id:items.length,value:Math.floor(Math.random()*23+9)}])
  }
    return (
    <div>
        <h3>React useState Hook</h3>
        <hr/>
        <button onClick={addItems} className='btn btn-primary mt-3 mb-3'>Add Item</button>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item=><tr><td>{item.id}</td><td>{item.value}</td></tr>)
                }
            </tbody>
        </table>
      
    </div>
  )
}
