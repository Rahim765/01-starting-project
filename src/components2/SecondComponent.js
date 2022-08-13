import React from "react";
import Charts from "./Charts";
import Employees from "./Employees";

const SecondComponent = (porps) => {
  return (
    <div>
      <Charts></Charts>
      <Employees></Employees>
    </div>
  );
};

export default SecondComponent;
