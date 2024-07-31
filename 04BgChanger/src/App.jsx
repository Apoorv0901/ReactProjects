import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [col , setColor] = useState("olive")

  return (
    <div className="w-full h-full"
    style={{backgroundColor: col}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 rounded-full'
          style={{backgroundClor:col}}
          >RED</button>

         <button
          onClick={()=>setColor("blue")}
          className='outline-none px-4 rounded-full'
          style={{backgroundClor:col}}
          >blue</button>

        <button
          onClick={()=>setColor("green")}
          className='outline-none px-4 rounded-full'
          style={{backgroundClor:col}}
          >green</button>
        </div>
      </div>
    </div>
  )
}

export default App
