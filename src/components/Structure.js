import React, { useState } from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import "./Structure.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sample from "./Steps/Sample";
import Sample2 from "./Steps/Sample2";

const Structure = (props) => {
  const [actStep, setActStep] = useState(0);

  const activeSt = (step) => {
    setActStep(step);
  };

  return (
    <React.Fragment>
      <div>
        <Sample2 activeStep={actStep}></Sample2>
      </div>

      <div>
        <section className="part">
          <Sample setStep={activeSt}></Sample>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Structure;
