import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours().toString().padStart(2, "0");
  let minute = props.date.getMinutes().toString().padStart(2, "0");

  return `${day} ${hour}:${minute}`;
}
