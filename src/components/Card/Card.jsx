import React from "react";
import "./Card.scss";
import Counter from "../Counter/Counter";

const Card = (props) => {
  const { name, role } = props;

  return (
    <article className="card">
      <h3 className="card__name">{name}</h3>
      <p className="card__role">{role}</p>
      <Counter />
    </article>
  );
};

export default Card;
