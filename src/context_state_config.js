import React, { useState, useEffect, useReducer } from "react";
import Context from "./Utils/context";
import WeatherIcon from "./Components/WeatherIcon";
import * as DataReducer from "./Store/Reducers/data_reducer";
import axios from "axios";
import CityInfo from "./Components/CityInfo";
import WeatherForecasts from "./Components/WeatherForecasts";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4c0c41e683cd64751a875280cff3da0e";
const LOCATION_CODE = "Istanbul";
const FULL_API_URL = `${API_URL}?q=${LOCATION_CODE}&appid=${API_KEY}`;

const kelvinToCelcius = (data) => Math.round(data - 273.15).toFixed(0);
const ContextState = (props) => {
  const [stateDataReducer, dispatchDataReducer] = useReducer(
    DataReducer.DataReducer,
    DataReducer.initialState
  );
  const [type, setType] = useState("cloudy");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        dispatchDataReducer({ type: "ON_LOAD", payload: response.data });
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Context.Provider value={{ stateDataReducer, dispatchDataReducer }}>
      <div className="app-container">
        <i className="fa-light fa-location-dot"></i>
        <h1>
          {stateDataReducer.cityName}
          {stateDataReducer.countryName}
        </h1>
        <div
          className="btn-container"
          onClick={(e) => {
            setType(e.target.name);
          }}
        >
          <button name="cloudy">Cloudy</button>
          <button name="sunny">Sunny</button>
          <button name="snowy">Snowy</button>
          <button name="stormy">Lightning</button>
          <button name="rainy">Rainy</button>
          <button name="partlyCloudy">Partly cloudy</button>
        </div>
        <div className="search-container">
          <form className="search-form">
            <input type="text"></input>
            <button type="submit">Search</button>
          </form>
        </div>
        <WeatherIcon type={type}></WeatherIcon>
        <CityInfo></CityInfo>
        {isLoaded && <WeatherForecasts></WeatherForecasts>}
      </div>
    </Context.Provider>
  );
};
export default ContextState;
