import React, { useState } from "react";
import BarChart from "./BarChart";
import Cart from "./Cart";
import ChartsInfo from "./ChartsInfo";
import Doughnut from "./Doughnut";
import DrillDown from "./DrillDown";
import "./ThirdComponent.css";
import UserInfo from "./UserInfo";
const ThirdComponent = (props) => {
  const [showCart, setshowCart] = useState(false);
  function onShowCartHandler() {
    setshowCart(true);
  }
  function onHideCartHandler() {
    setshowCart(false);
  }
  return (
    <React.Fragment>
      <div>
        <ChartsInfo></ChartsInfo>
      </div>
      <div className="thmain">
        <div className="chdiv">
          <div className="dourep">
            <Doughnut></Doughnut>
          </div>
          <div className="dourep">
            <div className="chartreport">
              <div className="point1"></div>
              <span>تعداد گزارشات سال اخیر</span>
            </div>
            <div className="chartreport">
              <div className="point2"></div>
              <span>تعداد گزارشات ماه اخیر</span>
            </div>
            <div className="chartreport">
              <div className="point3"></div>
              <span>تعداد گزارشات هفته اخیر</span>
            </div>
          </div>
        </div>
        <div className="chdiv">
          <BarChart></BarChart>
        </div>
        <div className="chdiv">
          <div className="avail">
            <DrillDown></DrillDown>
            <div>
              <h5>25</h5>
              <span> روز از اشتراک شما باقی مانده است</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserInfo onShowCartHandler={onShowCartHandler}></UserInfo>
      </div>
      {showCart && <Cart onHideCartHandler={onHideCartHandler}></Cart>}
    </React.Fragment>
  );
};

export default ThirdComponent;
