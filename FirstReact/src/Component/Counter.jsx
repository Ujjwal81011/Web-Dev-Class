import React, {useState} from "react";
const Counter = () => {
  let[count, setCount] = useState(0);
    // let counter = 0;
    function Increment(){
        setCount(count++);
        console.log(count);
    }; 
    function Decrement(){
        setCount(count-1);
        console.log(count);
    };

  return (
    <>
    {/* <button onClick={()=>{alert("Welcome To react");}}>Click Me</button> */}

    <button onClick={Increment}>Increment</button>
    <h1>{count}</h1>
    <button onAbort={Decrement}>Decrement</button>
    </>
  )
}

export default Counter