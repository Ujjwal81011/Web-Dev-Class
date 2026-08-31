import React, { useState } from 'react'

const Plus = () => {
    const[arr,setArr] = useState([1,2,3,4,5]);
    const increment = () => {
        setArr(arr.map(value => value+2));
    }
  return (
    <>
        <h2> Array: {arr.join(",")}</h2>
        <button onClick={increment}>Plus+2</button>
        
    </>
  )
}

export default Plus