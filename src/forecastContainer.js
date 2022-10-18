import React from "react";
import Forecast from "./forecast.js";

export default function ForecastContainer() {
  return (
    <div>
      <hr />
      <div>
        5-DAY FORECAST
        <div className="row forecast-row d-flex justify-content-between px-3">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
