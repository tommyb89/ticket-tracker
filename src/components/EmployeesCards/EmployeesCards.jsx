import React from "react";
import "./EmployeesCards.scss";
import Card from "../Card/Card";

const EmployeesCards = (props) => {
  const { employeesArr } = props;

  return employeesArr.map((employee, index) => {
    return (
      <Card
        key={"employee" + index}
        name={employee.name}
        role={employee.role}
      />
    );
  });
};

export default EmployeesCards;
