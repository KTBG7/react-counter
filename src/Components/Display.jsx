import React, { useState } from "react";

const Display = (props) => {
  return (
    <section className="display">
      <h1>{props.count}</h1>
    </section>
  );
};

export default Display;
