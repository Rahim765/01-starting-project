/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import "./BarChart.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarChart extends Component {
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
    CanvasJS.addColorSet("BarShades", [
      //colorSet Array
      "#FF6361",
      "#bc5090",
    ]);
    const options = {
      height: 260,
      width: 320,
      panEnabled: true,
      zoomEnabled: true,
      dataPointMaxWidth: 10,
      axisX: {
        labelFontSize: 15,
        labelFontFamily: "iran-sans",

        lineColor: "transparent",
        tickLength: 0,
      },
      axisY: {
        interlacedColor: "transparent",
        tickLength: 0,

        gridColor: "transparent",
        labelFontFamily: "iran-sans",
        lineColor: "transparent",
      },
      backgroundColor: "transparent",
      animationEnabled: true,
      colorSet: "BarShades",
      data: [
        {
          type: "column",

          dataPoints: [
            { x: 1, y: 15, label: "برج زیبا" },
            { x: 2, y: 5, label: "ساختمان تچرا" },
            { x: 3, y: 20, label: "پارک ملت" },
            { x: 4, y: 4, label: "پارکینگ آزادی" },
            { x: 5, y: 5, label: "مهر " },
            { x: 6, y: 5, label: "برج آفتاب" },
            { x: 7, y: 20, label: "افرا" },
          ],
        },
        {
          type: "column",
          dataPoints: [
            { x: 1.07, y: 20, label: "برج زیبا" },
            { x: 2.07, y: 15, label: "ساختمان تچرا" },
            { x: 3.07, y: 10, label: "پارک ملت" },
            { x: 4.07, y: 3, label: "پارکینگ آزادی" },
            { x: 5.07, y: 15, label: "مهر " },
            { x: 6.07, y: 10, label: "برج آفتاب" },
            { x: 7.07, y: 15, label: "افرا" },
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

export default BarChart;
