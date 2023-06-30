import React from "react";
import BarChart from "./BarChart";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <BarChart
          id={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};

export default Chart;
