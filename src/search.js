import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="row mx-0">
      <div className="col-md-9 px-0 input-text">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find a location"
            aria-label="Find a location"
          />

          <button className="btn btn-outline-secondary" type="submit" value="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="col-md-3 text-end pe-0 d-block">
        <button
          type="button"
          className="btn btn-secondary current-location-btn"
        >
          Current Location
        </button>
      </div>
    </div>
  );
}
