import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <h3 className="counter__name">Counter</h3>
      <p className="counter__num">{counter}</p>
      <i className="far fa-minus-square" onClick={handleDecrement}></i>
      <i className="far fa-plus-square" onClick={handleIncrement}></i>
    </div>
  );
};

export default Counter;
