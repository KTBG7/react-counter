import React, { useState } from "react";

const ButtonPad = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementCount2 = () => {
    setCount(count + 2);
  };
  const incrementCount5 = () => {
    setCount(count + 5);
  };
  const incrementCount10 = () => {
    setCount(count + 10);
  };
  const decrementCount = () => {
    setCount(count - 1);
    console.log(count);
  };
  const decrementCount2 = () => {
    setCount(count - 2);
    console.log(count);
  };
  const decrementCount5 = () => {
    setCount(count - 5);
    console.log(count);
  };
  const decrementCount10 = () => {
    setCount(count - 10);
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
        <span>+1</span>
      </button>
      <button onClick={decrementCount}>
        <span>-1</span>
      </button>
      <button className="resetbutton" onClick={resetCount}>
        <span>Reset</span>
      </button>
      <div className="button-pad2">
        <button onClick={incrementCount2}>
          <span>+2</span>
        </button>
        <button onClick={decrementCount2}>
          <span>-2</span>
        </button>
        <button onClick={incrementCount5}>
          <span>+5</span>
        </button>
        <button onClick={decrementCount5}>
          <span>-5</span>
        </button>
      </div>
      <div>
        <button onClick={incrementCount10}>
          <span>+10</span>
        </button>
        <button onClick={decrementCount10}>
          <span>-10</span>
        </button>
      </div>
    </div>
  );
};

export default ButtonPad;
