import { useRef } from "react"
import React from 'react'

const UseRefs = () => {
    const inputRef = useRef()
    const handeChange =() =>{
       inputRef.current.focus()
    }

  return (
    <div>
        <input type='file' ref={inputRef}/>
        <button onClick={handeChange}>Focus</button>
    </div>
  )
}

export default UseRefs