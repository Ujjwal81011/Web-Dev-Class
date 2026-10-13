import React, { useContext } from "react";
import { context } from "../Home";
const C = () => {
  const obj = useContext(context);
  return (
    <div>
      <h2>Component C inside B</h2>
      <h3>Name:{obj.name}</h3>
      <button
        className="btn btn-success rounded"
        onClick={() => {
          obj.setName("MCA");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default C;
