/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import "./FirstChart.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class SecondChart extends Component {
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
    CanvasJS.addColorSet("secondShades", [
      //colorSet Array
      "transparent",
      "rgb(235, 188, 153)",
      "rgb(228, 111, 22)",
    ]);
    const options = {
      dataPointMaxWidth: 40,
      height: 260,
      axisX: {
        lineColor: "transparent",
        tickLength: 0,
        labelFontSize: 10,
        labelFontFamily: "iran-sans",
        labelFontWeight: "bold",
      },
      axisY: {
        interlacedColor: "transparent",
        tickLength: 0,
        gridColor: "transparent",
        lineColor: "transparent",
      },
      backgroundColor: "transparent",
      animationEnabled: true,
      colorSet: "secondShades",
      data: [
        {
          type: "stackedColumn",
          dataPoints: [
            { y: 0, label: "برج زیبا" },
            { y: 5, label: "ساختمان تچرا" },
            { y: 3, label: "پارک ملت" },
            { y: 4, label: "پارکینگ آزادی" },
            { y: 6, label: "مهر" },
            { y: 4, label: "برج آفتاب" },
            { y: 5, label: "افرا" },
          ],
        },
        {
          type: "stackedColumn",
          dataPoints: [
            { y: 10, label: "برج زیبا" },
            { y: 5, label: "ساختمان تچرا" },
            { y: 7, label: "پارک ملت" },
            { y: 5, label: "پارکینگ آزادی" },
            { y: 2, label: "مهر" },
            { y: 4, label: "برج آفتاب" },
            { y: 6, label: "افرا" },
          ],
        },
        {
          type: "stackedColumn",
          dataPoints: [
            { y: 15, label: "برج زیبا" },
            { y: 10, label: "ساختمان تچرا" },
            { y: 5, label: "پارک ملت" },
            { y: 7, label: "پارکینگ آزادی" },
            { y: 10, label: "مهر" },
            { y: 5, label: "برج آفتاب" },
            { y: 5, label: "افرا" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          color="transparent"
          options={options}
          onRef={(ref) => (this.chart = ref)}
        />
      </div>
    );
  }
}

export default SecondChart;
