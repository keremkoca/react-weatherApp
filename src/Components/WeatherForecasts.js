import React, { useContext, useEffect, useState } from "react";
import classes from "./WeatherForecasts.module.css";
import Context from "../Utils/context";
import axios from "axios";
import WeatherNav from "./WeatherNav";
import WeatherNavByHours from "./WeatherNavByHours";
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = "5711a2c595f4af4f4115773f743ecbdc";
function WeatherForecasts() {
  const { stateDataReducer: state, dispatchDataReducer: dispatch } =
    useContext(Context);
  let lat = Math.round(state.coord.lat);
  let lon = Math.round(state.coord.lon);
  const FULL_API_URL = `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        dispatch({
          type: "GET_WEATHERFORECAST",
          payload: response.data,
        });
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lat, lon, FULL_API_URL, dispatch]);

  return (
    <div className={classes.container}>
      {isLoaded && <WeatherNavByHours />}
      {isLoaded && <WeatherNav />}
    </div>
  );
}

export default WeatherForecasts;
