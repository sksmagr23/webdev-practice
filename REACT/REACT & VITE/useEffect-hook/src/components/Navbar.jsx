import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("color changed")
    }, [color])
    

    // Example of cleanup function
    useEffect(() => {
    alert("hey welcome, this is the render of app.jsx")
    
    return () => {
      alert("component was unmounted")
     }
    }, [])
   // the return part comes when component is unnmounted conditionally.

  return (
    <div>
      I am navbar of {color} color ,wow..
    </div>
  )
}

export default Navbar
