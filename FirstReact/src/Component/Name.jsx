import React, {useState} from "react";
const Name = () => {
    let[name, setName] = useState("Tarun");
    const changeName = (newName) => {
         setName(newName);
    };

  return (
    <>
        <h2>Name:{name}</h2>
        <button onClick={() => changeName("Ujjwal")}>ChangeName</button>
    </>
  )
}

export default Name