import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <h3 className="counter__name">Counter</h3>
      <p className="counter__num">0</p>
      <i class="far fa-minus-square"></i>
      <i class="far fa-plus-square"></i>
    </div>
  );
};

export default Counter;
