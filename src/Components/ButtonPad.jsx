import React, { useState } from "react";

const ButtonPad = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const double = () => {
    setCount(count * count);
  };
  const decrementCount = () => {
    setCount(count - 1);
    console.log(count);
  };
  const half = () => {
    setCount(count / 2);
    console.log(count);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="button-pad">
      <div>
        <span>{count}</span>
      </div>

      <button onClick={incrementCount}>
        <span>Increment</span>
      </button>
      <button onClick={decrementCount}>
        <span>Decrement</span>
      </button>
      <button className="resetbutton" onClick={resetCount}>
        <span>Reset</span>
      </button>
      <div className="button-pad2">
        <button onClick={double}>
          <span>Double</span>
        </button>
        <button onClick={half}>
          <span>Half</span>
        </button>
        </div>
        </div>
  );
};

export default ButtonPad;
