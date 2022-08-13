/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import "./FirstChart.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class FirstChart extends Component {
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
    CanvasJS.addColorSet("firstShades", [
      //colorSet Array
      "rgb(186, 194, 207)",
      "rgb(228, 111, 22)",
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
      colorSet: "firstShades",
      data: [
        {
          type: "column",

          dataPoints: [
            { y: 45, label: "نخعی" },
            { y: 30, label: "حلاجی" },
            { y: 60, label: "آقاجانی" },
            { y: 45, label: "خرمدل" },
            { y: 20, label: "شرکتی" },
            { y: 75, label: "آباده ای" },
            { y: 45, label: "رمضانی" },
          ],
        },
        {
          type: "spline",
          dataPoints: [
            { y: 20, label: "نخعی" },
            { y: 15, label: "حلاجی" },
            { y: 30, label: "آقاجانی" },
            { y: 20, label: "خرمدل" },
            { y: 10, label: "شرکتی" },
            { y: 35, label: "آباده ای" },
            { y: 17, label: "رمضانی" },
          ],
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

export default FirstChart;
