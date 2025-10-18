import React from 'react'
import "./Card.css"
const card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
      <img src="https://imgs.search.brave.com/XYnhfqrDJVnHVA0Ljz3bj-FH865C1SSj_ZK40bnQSwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OS8wNS8yMC8wMi9j/b2RpbmctOTI0OTIw/XzY0MC5qcGc" width={300} style={{border: "3px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}
//using props as an object
// inline css used like js , style = {{css here}}

export default card
