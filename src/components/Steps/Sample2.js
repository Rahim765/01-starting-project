import React from "react";
import "./Sample2.css";
import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  StepConnector,
  makeStyles,
} from "@material-ui/core";

const Sample2 = (props) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": {
        color: "orange",
        border: "2px solid orange",
        borderRadius: "25px",
      },
      "& .MuiStepIcon-completed": {
        color: "orange",
        border: "2px solid orange",
        borderRadius: "25px",
      },
      "& .Mui-disabled .MuiStepIcon-root": {
        color: "#ffffff00",
        border: "2px solid orange",
        borderRadius: "25px",
      },
    },
  }));

  const c = useStyles();

  return (
    <section className="sec">
      <Stepper
        alternativeLabel={true}
        className={`${c.root} cn`}
        activeStep={props.activeStep}
      >
        <Step index={0}>
          <StepLabel className="cn">
            <span className="des">اطلاعات اصلی</span>
          </StepLabel>
        </Step>
        <StepConnector></StepConnector>
        <Step index={1}>
          <StepLabel>
            <span className="des">تعریف زون ها</span>
          </StepLabel>
        </Step>
        <StepConnector></StepConnector>
        <Step index={2}>
          <StepLabel>
            <span className="des">تعریف افراد</span>
          </StepLabel>
        </Step>
        <StepConnector></StepConnector>
        <Step index={3}>
          <StepLabel>
            <span className="des">ثبت چک لیست</span>
          </StepLabel>
        </Step>
      </Stepper>
    </section>
  );
};

export default Sample2;
