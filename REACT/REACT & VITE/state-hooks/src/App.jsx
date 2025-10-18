import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // we can't use let a =0 ,then update it on click as inside div the {count} will be fixed and not change, using usestate we can update counter inside div {} also 
  
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update count</button>
    </>
  )
}

export default App
