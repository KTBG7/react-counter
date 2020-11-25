import React from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is my Simple React Counter</h2>
      </header>
      <Counter />
      <footer> By Kevin Ibanez</footer>
    </div>
  );
}

export default App;
