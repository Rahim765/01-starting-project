import React from "react";
import "./ChartsInfo.css";
const ChartsInfo = (props) => {
  return (
    <div className="chartinf">
      <div className="charttit">
        <span>نگاه کلی به گزارشات</span>
      </div>
      <div className="midchart">
        <div className="maljan">
          <div className="maljan">
            <div id="jani"></div>
            <span className="janicol">جانی</span>
          </div>
          <div className="maljan">
            <div id="mali"></div>
            <span className="malicol">مالی</span>
          </div>
        </div>
        <span>تعداد خسارت های مالی/جانی</span>
      </div>
      <div className="charttit">
        <span>اشتراک</span>
        <span className="goldcol"> طلائی</span>
      </div>
    </div>
  );
};

export default ChartsInfo;
