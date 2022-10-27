import React from "react";
import "./highLowTemp.css";

export default function HighLowTemp(props) {
  return (
    <ul className="d-flex flex-column align-items-end">
      <li className="high-temp">
        <i className="fa fa-temperature-high"></i>
        <span className="high-degree">{props.highTemp}°C</span>
        <small className="unit"></small>
      </li>
      <li className="low-temp">
        <i className="fa fa-temperature-low"> </i>
        <span className="low-degree">{props.lowTemp}°C</span>
        <small className="unit"></small>
      </li>
    </ul>
  );
}
