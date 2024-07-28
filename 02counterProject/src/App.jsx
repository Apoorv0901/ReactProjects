import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    if(counter != 0){
      setCounter(counter-1)
    }
    else alert("increse value")
  }

  return (
    <>
      <h1> Apoorv Sharma </h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}> add value {counter}</button>
      <br />
      <button onClick={removeValue}> remove value {counter}</button>
    </>
  )
}

export default App
