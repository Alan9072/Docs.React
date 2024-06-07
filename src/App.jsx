import React from 'react'
import './App.css'
import Background from './components/Background.jsx'
import Foreground from './components/Foreground.jsx'

function App() {
  return (
    <div className='maindiv'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App