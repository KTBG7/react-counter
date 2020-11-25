import React from "react";
import ButtonPad from "./ButtonPad";

function Counter(props) {
  return (
      <div className="container">
        <div className="display-box">
          <h1>{props.count}</h1>
          <ButtonPad />
        </div>
      </div>
  );
}

export default Counter;
