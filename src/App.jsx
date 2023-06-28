import { useState } from 'react'

import './App.css'


function ItemHold (){
  const [buttonChild, setButtonChildren] = useState([1,2,3])

function removeButton(removeId){
  setButtonChildren(buttonChild.filter((id)=> id!== removeId))
}

  return (
    <div>
      <h1> have fun</h1>
      {buttonChild.map((id)=>(
        <Item key={id} id={id} remove={()=>removeButton(id)} />
      ))}
    </div>
  )
      }


function Item ({remove, id}){
  return(
    <div>
      <button onClick={remove}>Fix me. id: {id}</button>
    </div>
  )
}

function App() {
  

  return (
    <>
   <div>
    <ItemHold/>
   </div>
    </>
  )
}

export default App
