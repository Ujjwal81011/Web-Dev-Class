import React, { useState } from 'react'
import A from './usecontext/A'
export const context=React.createContext();
const UseContextEx = () => {
  const [name,setName]=useState("KIET")
  return (
    <div style={{height:"80vh"}}>
    <h2>HOme Component</h2>
    <context.Provider value={{name,setName}}>
      <A/>
    </context.Provider>    
    </div>
  )
}

export default UseContextEx