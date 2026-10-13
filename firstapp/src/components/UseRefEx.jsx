import React, { useRef } from "react";

const UseRefEx = () => {
  const info = useRef();
  const btn = useRef();
  const setFocus = (e) => {
    e.preventDefault();
    info.current.focus();
    btn.current.style.backgroundColor="Green"
  };
  return (
    <div style={{ height: "80vh" }}>
      <h2>Use Ref Hook Example</h2>
      <form>
        <input type="text" ref={info} />
        <button className="btn btn-primary" 
        onClick={setFocus}
        ref={btn}
        >
          Set Focus
        </button>
      </form>
    </div>
  );
};

export default UseRefEx;
