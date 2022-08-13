import React from "react";

import "./Charts.css";
import Dropdown from "./Dropdown";
import FirstChart from "./FirstChart";
import SecondChart from "./SecondChart";
// const DUMMY_DATA = ["پروژه برج مروارید ", "پارک ملت ", "پارکینگ آزادی"];
// const DUMMY_MONTH = [
//   "فروردین",
//   "اردیبهشت",
//   "خرداد",
//   "تیر",
//   "مرداد",
//   "شهریور",
//   "مهر",
//   "آبان",
//   "آذر",
//   "دی",
//   "بهمن",
//   "اسفند",
// ];
const Charts = (props) => {
  return (
    <div>
      <div id="first">
        <div className="drops">
          <div className="divdrop">
            <Dropdown></Dropdown>
            <Dropdown></Dropdown>
          </div>
          <div>
            <h5 className="report">تعداد گزارشات ثبت شده هر فرد</h5>
          </div>
        </div>
        <div>
          <h5 className="report">تعداد افراد پروژه های شما</h5>
        </div>
      </div>

      <div id="second">
        <div className="cartdiv">
          <FirstChart></FirstChart>
        </div>
        <div className="cartdiv">
          <SecondChart></SecondChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;
