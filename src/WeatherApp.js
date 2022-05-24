import React, { useState, useEffect, useContext } from "react";
import Context from "./Utils/context";
import WeatherIcon from "./Components/WeatherIcon";
import axios from "axios";
import CityInfo from "./Components/CityInfo";
import WeatherForecasts from "./Components/WeatherForecasts";
import CitySearch from "./Components/CitySearch";
import CityTitle from "./Components/CityTitle";
import classes from "./WeatherApp.module.css";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4c0c41e683cd64751a875280cff3da0e";

function WeatherApp() {
  const { stateDataReducer: state, dispatchDataReducer: dispatch } =
    useContext(Context);
  const [isLoaded, setIsLoaded] = useState(false);
  const LOCATION_CODE = "Istanbul";
  const FULL_API_URL = `${API_URL}?q=${LOCATION_CODE}&appid=${API_KEY}`;
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        dispatch({ type: "ON_LOAD", payload: response.data });
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, FULL_API_URL]);
  return (
    <div className={classes.appContainer}>
      <CitySearch />
      <CityTitle />
      {<WeatherIcon type={state.condition}></WeatherIcon>}
      <CityInfo></CityInfo>
      {isLoaded && <WeatherForecasts></WeatherForecasts>}
    </div>
  );
}

export default WeatherApp;
