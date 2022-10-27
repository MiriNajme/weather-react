import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="weatherTemp">
        <span className="current-degree">{props.celsius}</span>
        <small className="degree-units ps-1">
          °C |
          <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5) + 32;
    return (
      <span className="weatherTemp">
        <span className="current-degree">{fahrenheit}</span>
        <small className="degree-units ps-1">
          <a href="/" className="clicked celsius" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </small>
      </span>
    );
  }
}
