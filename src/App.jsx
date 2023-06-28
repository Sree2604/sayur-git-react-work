import { useState } from 'react'

import './App.css'


function Parent (){
  const [children, setChildren] = useState([1,2,3])

function removeChild(removeid){
  setChildren(children.filter(id))
}

  return (
    <div>
      <h1> have fun</h1>
      {children.map((id)=>(
        <Child key={id} id={id} remove={removeChild} />
      ))}
    </div>
  )


function Child ({remove, id}){
  return(
    <div>
      <button onClick={remove}>Click to remove me. id: {id}</button>
    </div>
  )
}

function App() {
  

  return (
    <>
   
    </>
  )
}

export default App
