import React, { useContext, useEffect, useState } from "react";
import classes from "./WeatherForecasts.module.css";
import Context from "../Utils/context";
import axios from "axios";
import WeatherNav from "./WeatherNav";
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = "5711a2c595f4af4f4115773f743ecbdc";
function WeatherForecasts() {
  const { stateDataReducer: state, dispatchDataReducer: dispatch } =
    useContext(Context);
  const lat = Math.round(state.generalData.coord.lat);
  const lon = Math.round(state.generalData.coord.lon);
  const FULL_API_URL = `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        console.log(response, "girdi");
        dispatch({
          type: "GET_WEATHERFORECAST",
          payload: response.data,
        });
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={classes.container}>
      {isLoaded && <WeatherNav></WeatherNav>}
    </div>
  );
}

export default WeatherForecasts;
