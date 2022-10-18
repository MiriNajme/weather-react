import React from "react";
import Search from "./search.js";
import CurrentTemp from "./currentTemp.js";
import Footer from "./footer.js";
import "./layout.css";
import ForecastContainer from "./forecastContainer.js";

export default function Layout() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="weather-form">
            <Search />
            <CurrentTemp />
            <ForecastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
