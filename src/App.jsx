import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Days } from './components/Days'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <h1 className='text-violet-500'>Weather App</h1>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Days />
      </div>
    </>
  )
}

export default App
