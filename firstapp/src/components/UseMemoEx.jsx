import React, { useMemo, useState } from "react";
const UseMemoEx = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);
  const getDouble = useMemo(
    () => {
      for (let i = 0; i < 20000000; i++) {
        console.log("Function Double");
        return num * 2;
      }
    },
    [num],
  );
  return (
    <div>
      <h2>Example of UseMemo Hook</h2>
      <h2>
        Double of {num} is {getDouble}
      </h2>
      <h2>Count:{count}</h2>
      <button
        className="btn btn-primary p-2 m-2"
        onClick={() => setCount(count + 1)}
      >
        Inc
      </button>
    </div>
  );
};

export default UseMemoEx;
