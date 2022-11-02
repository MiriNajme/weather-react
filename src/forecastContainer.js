import axios from "axios";
import React, { useState, useEffect } from "react";
import Forecast from "./forecast.js";
import "./forecast.css";

export default function ForecastContainer(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    if (!loaded) {
      let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
      let lat = props.coord.lat;
      let lon = props.coord.lon;
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      console.log("FORECAST");

      axios.get(url).then(handleResponse);
    }
    // eslint-disable-next-line
  }, [loaded]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  const renderedItem = () => {
    if (loaded) {
      return (
        <>
          <hr />
          <div>
            5-DAY FORECAST
            <div className="row forecast-row d-flex justify-content-between px-3">
              {forecastData.slice(1, 6).map(function (dailyForecast, index) {
                return <Forecast data={dailyForecast} key={index} />;
              })}
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return <div>{renderedItem()}</div>;
}
