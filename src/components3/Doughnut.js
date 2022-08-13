/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import "./Doughnut.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Doughnut extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
    this.addSymbols = this.addSymbols.bind(this);
  }
  addSymbols(e) {
    var suffixes = ["", "", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    CanvasJS.addColorSet("doughnutShades", [
      //colorSet Array
      "#A3A1FB",
      "#58508D",
      "#41CD7D",
    ]);
    const options = {
      height: 260,
      dataPointMaxWidth: 25,
      axisX: {
        labelFontSize: 15,
        labelFontFamily: "iran-sans",
        labelFontWeight: "bold",
        lineColor: "transparent",
        tickLength: 0,
      },
      axisY: {
        interlacedColor: "transparent",
        tickLength: 0,
        gridColor: "transparent",
        lineColor: "transparent",
      },
      backgroundColor: "transparent",
      animationEnabled: true,
      colorSet: "doughnutShades",
      data: [
        {
          type: "doughnut",
          dataPoints: [{ y: 15.37 }, { y: 20.0 }, { y: 50 }],
        },
      ],
    };
    return (
      <div className="chartback">
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}

export default Doughnut;
