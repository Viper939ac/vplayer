import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          This is a show of React in Electron with Vite.
        </h1>
      </div>
    </>
  )
}

export default App
