import React from 'react'
import Backg from './component/Backg'
import Foreground from './component/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
     <Backg/>
     <Foreground/>
    </div>
  )
}

export default App