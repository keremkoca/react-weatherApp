import React, { useContext } from "react";
import classes from "./CityInfo.module.css";
import Context from "../Utils/context";

const kelvinToCelcius = (data) => Math.round(data - 273.15).toFixed(0);

function CityInfo() {
  const { stateDataReducer: state } = useContext(Context);
  return (
    <div className={classes.container}>
      <div className={classes.info_condition}>{state.condition}</div>
      <div className={classes.info_degree}>
        {kelvinToCelcius(state.tempratureK) + "°"}
      </div>
      <div className={classes.info_bottom_container}>
        <div className={classes.info_windSpeed}>
          <i className={`${classes.info_wind_icon} fa-solid fa-wind`}></i>
          {state.windSpeedK}
        </div>
        <div className={classes.info_humidity}>
          <i
            className={`${classes.info_humidity_icon} fa-solid fa-droplet`}
          ></i>
          {state.humidity}%
        </div>
      </div>
    </div>
  );
}

export default CityInfo;
