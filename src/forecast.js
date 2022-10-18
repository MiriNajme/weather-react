import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="col-lg-2 forecast-details">
      <div className="weather-forecast-date">Monday</div>
      <img src="http://openweathermap.org/img/wn/01d.png" alt="" width="42px" />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temp-min">10°</span>
        <span className="weather-forecast-temp-max">16°</span>
      </div>
    </div>
  );
}
