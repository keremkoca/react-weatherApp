import React, { useContext, useEffect, useState } from "react";
import SingleDayForecast from "./SingleDayForecast";
import classes from "./WeatherForecasts.module.css";
import Context from "../Utils/context";
import axios from "axios";
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = "5711a2c595f4af4f4115773f743ecbdc";

function WeatherForecasts() {
  const { stateDataReducer: state, dispatchDataReducer: dispatch } =
    useContext(Context);
  const [forecast, setForecast] = useState({
    days: [],
    daysToDisplay: [],
    indexDisplayed: 0,
  });
  console.log(state.daily);
  console.log(forecast.days);
  const lat = Math.round(state.generalData.coord.lat);
  const lon = Math.round(state.generalData.coord.lon);
  const FULL_API_URL = `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const addToDisplay = () => {
    const updatedDays = [];
    for (let i = 0; i <= 2; i++) {
      updatedDays.push(forecast.days[i]);
    }
    setForecast((prev) => ({
      ...prev,
      daysToDisplay: updatedDays,
    }));
    console.log(forecast.daysToDisplay);
  };
  useEffect(() => {
    axios
      .get(FULL_API_URL)
      .then((response) => {
        console.log(response, "girdi'");
        dispatch({
          type: "GET_WEATHERFORECAST",
          payload: response.data,
        });
        setForecast({
          days: response.data.daily,
        });
        addToDisplay();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.container}>
      {state.daily.map((day) => {
        return (
          <SingleDayForecast key={day.dt} date={day.dt}></SingleDayForecast>
        );
      })}
    </div>
  );
}

export default WeatherForecasts;
