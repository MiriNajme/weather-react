import React from "react";
import HighLowTemp from "./highLowTemp";
import "./currentTemp.css";
import WeatherTemp from "./weatherTemp";
import FormattedDate from "./fomattedDate";

export default function CurrentTemp(props) {
  return (
    <div className="row my-3 mx-0">
      <div className="col-md-4 city ps-0">
        <ul>
          <li>
            <WeatherTemp celsius={props.data.temperature} />
          </li>
          <li>
            <h1 className="city-name">{props.data.city}</h1>
          </li>
          <li className="text-muted current-time">
            Last Update : <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-md-4 weather-icon pe-0">
        <ul>
          <li>
            <img src={props.data.iconUrl} alt="" className="weather-icon" />
          </li>
          <li className="text-muted weather-description">
            {props.data.description}
          </li>
          <li className="text-muted">
            Wind speed:{" "}
            <span className="wind-speed">{props.data.wind} m/s</span>
          </li>
        </ul>
      </div>
      <div className="col-md-4 high-low-temp">
        <HighLowTemp
          highTemp={props.data.highTemp}
          lowTemp={props.data.lowTemp}
        />
      </div>
    </div>
  );
}
