import React, { useState } from "react";
import ButtonPad from "./ButtonPad";

function Counter(props) {
  return (
    <div className="counter">
      <div>
        <span>{props.count}</span>
      </div>
      <ButtonPad />
    </div>
  );
}

export default Counter;
