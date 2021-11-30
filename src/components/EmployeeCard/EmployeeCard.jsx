import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  const { name, role } = props;

  return (
    <article className="employee">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <Counter />
    </article>
  );
};

export default EmployeeCard;
