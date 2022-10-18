import React from "react";
import HighLowTemp from "./highLowTemp";
import "./currentTemp.css";
import { weatherData } from "./fakeData.js";

export default function CurrentTemp() {
  return (
    <div className="row my-3 mx-0">
      <div className="col-md-4 city ps-0">
        <ul>
          <li>
            <span className="current-degree">{weatherData.temperature}</span>
            <small className="degree-units">
              <a href="/" className="clicked celsius">
                °C{" "}
              </a>
              |
              <a href="/" className="fahrenheit">
                °F
              </a>
            </small>
          </li>
          <li>
            <h1 className="city-name">{weatherData.city}</h1>
          </li>
          <li className="text-muted current-time">{weatherData.date}</li>
        </ul>
      </div>
      <div className="col-md-4 weather-icon pe-0">
        <ul>
          <li>
            <img
              src="http://openweathermap.org/img/wn/01d.png"
              alt=""
              className="weather-icon"
            />
          </li>
          <li className="text-muted weather-description">
            {weatherData.description}
          </li>
          <li className="text-muted">
            Wind speed:{" "}
            <span className="wind-speed">{weatherData.wind} m/s</span>
          </li>
        </ul>
      </div>
      <div className="col-md-4 high-low-temp">
        <HighLowTemp />
      </div>
    </div>
  );
}
