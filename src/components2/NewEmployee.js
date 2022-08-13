import React from "react";
import "./NewEmployee.css";
const NewEmployee = (props) => {
  return (
    <div>
      <div className="empform">
        <button className="newemp">افزودن فرد جدید+</button>
        <label>افراد پروژه های من </label>
      </div>
      <div>
        <form className="newempform">
          <div className="empfield">
            <label>نام فعالیت </label>
            <input className="newempinp" placeholder="مثال:‌فعالیت 1"></input>
          </div>
          <div className="empfield">
            <label>نام زون </label>
            <input className="newempinp" placeholder="مثال زون شماره 2"></input>
          </div>

          <div className="empfield">
            <label>نام پروژه</label>
            <input
              className="newempinp"
              placeholder="مثال: پروژه برج مروارید"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEmployee;
