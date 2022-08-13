import React from "react";
import empsvg from "./../assets/Emp.svg";
import persvg from "./../assets/person.svg";
import telsvg from "./../assets/Tel.svg";
import pensvg from "./../assets/pen.svg";
import trashsvg from "./../assets/trash.svg";
import "./Employee.css";
const Employee = (props) => {
  return (
    <section className="empdiv">
      <div className="empicon">
        <img className="iconsize" src={empsvg} alt="My Happy SVG" />
      </div>
      <div className="empinfo">
        <div className="int">
          <label className="lbl">{`نام خانوادگی: ${props.lastname}`}</label>
          <div className="pericon">
            <img src={persvg} alt="My Happy SVG" />
          </div>
        </div>
        <div className="int">
          <label className="lbl">{`نام: ${props.name}`}</label>
          <div className="pericon">
            <img src={persvg} alt="My Happy SVG" />
          </div>
        </div>
        <div className="int2">
          <label className="lbl">{`شماره موبایل: ${props.phoneNumber}`}</label>
          <div className="pericon">
            <img src={telsvg} alt="My Happy SVG" />
          </div>
        </div>
      </div>
      <div className="delEdi">
        <button className="firbtn">
          پاک کردن
          <img src={trashsvg} alt="My Happy SVG" />
        </button>
        <button className="secbtn">
          ویرایش
          <img src={pensvg} alt="My Happy SVG" />
        </button>
      </div>
    </section>
  );
};

export default Employee;
