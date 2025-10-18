import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "hey man",
      desc: "I am a human todo"
    },
    {
      title: "Hey market",
      desc: "I am a market todo"
    }
  ])


  // we can also make small component like this without component folder
  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border border-1 border-purple-400">
  //     <div className='todo'>{todo.title}</div>
  //   <div className='todo'>{todo.desc}</div>
  //   </div>    

  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showbtn?<button>Showbtn is true</button>: <button>showbtn is false</button>}

      {/* {showbtn && <button> I will be shown only when other button is clicked, showbtn is true</button>} */}
      
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key= {todo.title} className="m-4 border border-1 border-purple-400">
          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
        </div> 
      })}

      {/* unique key has to be given while mapping */}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
