import React from "react";
import "./Card.scss";
import Counter from "../Counter/Counter";

const Card = (props) => {
  const { name, role } = props;

  return (
    <article className="card">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <Counter />
    </article>
  );
};

export default Card;
