import React from "react";

export default function Forecast(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="col-lg-2 forecast-details">
      <div className="weather-forecast-date">{day()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
        alt=""
        width="42px"
      />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temp-min">{minTemp()}</span>
        <span className="weather-forecast-temp-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
