import React from "react";
import Weather from "./weather.js";
import "./layout.css";

export default function Layout() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="weather-form">
          <Weather />
          {/* <ForecastContainer /> */}
        </div>
      </div>
    </div>
  );
}
