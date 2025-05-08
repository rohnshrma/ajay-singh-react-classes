import { useState } from "react";

const Counter = () => {
  console.log("Counter rerendered");
  var [count, setCount] = useState(0);

  const inrementHandler = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrementHandler = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="Counter p-4 shadow-sm m-4 text-center">
      <h2>Count : {count}</h2>
      <button onClick={inrementHandler} className="btn m-3 btn-success">
        Increment
      </button>
      <button onClick={decrementHandler} className="btn m-3 btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
