import React, { useEffect, useState } from "react";
import CurrentTemp from "./currentTemp";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");
  function showTemp(response) {
    // console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchTemp();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function fetchTemp() {
    const apiKey = "8b5dee79ecf0c909b3e67b3b6230efa2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(showTemp);
  }

  function renderElement() {
    if (weatherData.ready) {
      return <CurrentTemp data={weatherData} />;
    } else {
      return <div>Loading...</div>;
    }
  }

  function getCity(response) {
    // console.log(response);
    setWeatherData((prevState) => ({
      ...prevState,
      city: response.data[0].name,
    }));
  }

  async function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "8b5dee79ecf0c909b3e67b3b6230efa2";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    let reverseUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&APPID=${apiKey}`;

    const response = await axios.get(url);
    delete response.data.name;
    showTemp(response);
    axios.get(reverseUrl).then(getCity);
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row mx-0">
          <div className="col-md-9 px-0 input-text">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Find a location"
                aria-label="Find a location"
                onChange={handleCityChange}
              />

              <button
                className="btn btn-outline-secondary"
                type="submit"
                value=""
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="col-md-3 text-end pe-0 d-block">
            <button
              type="button"
              className="btn btn-secondary current-location-btn"
              onClick={getCurrentPosition}
            >
              Current Location
            </button>
          </div>
        </div>
      </form>
      {renderElement()}
    </div>
  );
}
