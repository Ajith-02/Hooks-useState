import React, { useState } from "react";

var count = 0;

function App() {
  const [count, setCount] = useState(123);

  function increase() {
    setCount(10);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
