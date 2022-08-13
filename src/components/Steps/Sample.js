import React, { useState, useRef } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import Switch from "react-input-switch";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import calImg from "../../assets/calendar.svg";
import ToggleSwitch from "../Switch/ToggleSwitch";
import "./Sample.css";

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div className="lastdiv">
      <button className="actButton" onClick={handleBack}>
        {" "}
        مرحله قبلی{" "}
      </button>
      <button className="actButton" onClick={handleNext}>
        {" "}
        مرحله بعدی{" "}
      </button>
    </div>
  );
};

const One = (props) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");
  const nameRef = useRef();
  const masahatRef = useRef();
  const startTimeRef = useRef();
  const finishTimeRef = useRef();
  const locationRef = useRef();
  const zonRef = useRef();

  const [nameAcive, setNameActive] = useState(false);
  const [turn, setTurn] = useState("yes");
  const onInputChanged = (event) => {};

  const validate = () => {
    const enteredName = nameRef.current.value;
    const enteredMasahat = masahatRef.current.value;
    const enteredStartTime = startTimeRef.current.value;
    const enteredFinishTime = finishTimeRef.current.value;
    const enteredLocation = locationRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredMasahat.trim().length === 0 ||
      enteredStartTime.trim().length === 0 ||
      enteredFinishTime.trim().length === 0 ||
      enteredLocation.trim().length === 0
    ) {
      return;
    } else {
      setError("");
      props.nextStep();
      props.userCallback(info1);
    }
  };

  return (
    <div>
      <div className="d">
        <h5 className="txt">
          در این مرحله باید اطلاعات اصلی پروژه مثل نام و زمانبدی و موقعیت مکانی
          را مشخص کنید
        </h5>

        <div className="mainfeild">
          <div className="maindiv">
            <label>مساحت</label>
            <input
              placeholder="مثال: ۲۵ متر مربع"
              ref={masahatRef}
              name="name"
              className="inp"
              type="text"
              onClick={onInputChanged}
            ></input>
            <label>زمان خاتمه برنامه ریزی شده</label>
            <input
              placeholder="مثال: 00/01/30"
              ref={finishTimeRef}
              className="inp"
              type="text"
              id="Calicon"
            ></input>
          </div>

          <div className="maindiv">
            <label>نام پروژه</label>
            <input
              placeholder="مثال: پروژه برج مروارید"
              ref={nameRef}
              className="inp"
              type="text"
            ></input>
            <label>زمان شروع</label>
            <input
              placeholder="مثال: 00/01/30"
              id="Calicon"
              ref={startTimeRef}
              className="inp"
              type="text"
            ></input>
          </div>
        </div>

        <div className="fotdiv">
          <label>موقعیت مکانی</label>
          <input
            placeholder="مثال:‌مشهد- سه راه خیام٬ نرسیده به دستغیب"
            id="location"
            ref={locationRef}
            className="footinp"
            type="input"
          ></input>
          <label>زون بندی </label>
          <section className="togglezon">
            <div>
              <ToggleSwitch label=" "></ToggleSwitch>
            </div>
            <div>
              <h6>آیا پروژه زون بندی دارد؟</h6>
            </div>
          </section>
        </div>
      </div>
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});

  const validate2 = () => {
    props.nextStep();
    props.userCallback(info2);
  };

  return (
    <div>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  const validate3 = () => {
    props.nextStep();
  };

  return (
    <div>
      <br />
      <ActionButtons {...props} nextStep={validate3} lastStep={3} />
    </div>
  );
};

const Four = (props) => {
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <br />
      <ActionButtons {...props} lastStep={4} />
    </div>
  );
};

const Sample = (props) => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    console.log(e);
    if (e.activeStep === 1) {
      console.log(1);
      props.setStep(1);
    } else if (e.activeStep === 2) {
      console.log(3);
      props.setStep(3);
    } else if (e.activeStep === 3) {
      console.log(5);
      props.setStep(5);
    } else if (e.activeStep === 4) {
      console.log(7);
      props.setStep(7);
    }
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  return (
    <div>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}

      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
        <Four user={user} completeCallback={handleComplete}></Four>
      </StepWizard>
    </div>
  );
};

export default Sample;
