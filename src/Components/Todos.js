import React, { useState } from 'react'

const Todos = () => {
    const [initial, setInitial] = useState();
    const [data,setData] = useState([])

    const getInput = (event) => {
        console.log(event.target.value);
        setInitial(event.target.value)
    }
    const getData = () => {
        console.log(initial);
        setData(initial)
    }
  return (
    <>
    <div className='container'>
    <div className='inputTask'>
      <input type='text' placeholder='Enter Your Task' onChange={getInput}/>
      <button onClick={getData}>Add</button>
    </div>
    {data}
   </div>
    </>
  )
}

export default Todos