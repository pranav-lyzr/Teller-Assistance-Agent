import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatLayout from './ChatLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatLayout/>
    </>
  )
}

export default App
