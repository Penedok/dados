import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
         
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Ola mundo do Git</h2>
        <h2>Ola mundo do Git da Karen</h2>
        <h4>Ola mundo do Git da Karen</h4>
        <h4>Ola mundo do Git da Karen</h4>
        <h4>Ola mundo do Git da Karen</h4>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
         Git 
      </p>
    </>
  )
}

export default App
