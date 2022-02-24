import React, { useState, useEffect, useReducer } from "react";
import Context from "./Utils/context";
import WeatherIcon from "./Components/WeatherIcon";
import * as DataReducer from "./Store/Reducers/data_reducer";
import axios from "axios";
import CityInfo from "./Components/CityInfo";
import WeatherForecasts from "./Components/WeatherForecasts";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4c0c41e683cd64751a875280cff3da0e";

const kelvinToCelcius = (data) => Math.round(data - 273.15).toFixed(0);
const ContextState = (props) => {
  const [stateDataReducer, dispatchDataReducer] = useReducer(
    DataReducer.DataReducer,
    DataReducer.initialState
  );
  const [type, setType] = useState();
  console.log(type);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("Istanbul");
  const LOCATION_CODE = city;
  const FULL_API_URL = `${API_URL}?q=${LOCATION_CODE}&appid=${API_KEY}`;
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        console.log(response);
        dispatchDataReducer({ type: "ON_LOAD", payload: response.data });
        setIsLoaded(true);
        setType(response.data.weather[0].main);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(stateDataReducer);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .get(FULL_API_URL)
      .then((response) => {
        dispatchDataReducer({ type: "ON_LOAD", payload: response.data });
        setIsLoaded(true);
        setCity("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Context.Provider value={{ stateDataReducer, dispatchDataReducer }}>
      <div className="app-container">
        <div className="search-container">
          <form onSubmit={handleOnSubmit} className="search-form">
            <input
              className="search-form-input"
              onChange={(event) => setCity(event.target.value)}
              onFocus={() => setCity("")}
              value={city}
              type="text"
            ></input>
            <button className="search-form-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="title-container">
          <div className="title-icon-container">
            <i className={`fa-solid fa-location-dot`}></i>
          </div>
          <h1 className="title-cityName">{stateDataReducer.cityName}</h1>
          <h1 className="title-countryName">{stateDataReducer.countryName}</h1>
        </div>

        <WeatherIcon type={type}></WeatherIcon>
        <CityInfo></CityInfo>
        {isLoaded && <WeatherForecasts></WeatherForecasts>}
      </div>
    </Context.Provider>
  );
};
export default ContextState;
