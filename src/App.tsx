import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseHandler=()=>{
    setCount(count => count + 1)
  }

  const decreaseHandler=()=>{
    if(count === 0){
      return
    }
    setCount(count => count - 1)
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div><p>{count}</p></div>
      <div className="card">
        <button onClick={increaseHandler}>
          +
        </button>
        <button onClick={decreaseHandler}>
          -
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
