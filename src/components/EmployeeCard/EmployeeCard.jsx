import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  const { employeeArr } = props;
  console.log(employeeArr);

  const EmployeeCards = employeeArr.map((employee) => {
    return (
      <article className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee__role">{employee.role}</p>
        <Counter />
      </article>
    );
  });

  return <>{EmployeeCards}</>;
};

export default EmployeeCard;
