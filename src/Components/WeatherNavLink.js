import React from "react";
import classes from "./WeatherNavLink.module.css";
import { dateConverter, kelvinToCelcius } from "../functions/functions";
import WeatherIcon from "./WeatherIcon";
function WeatherNavLink(props) {
  const { day, dayData } = props;
  return (
    <div className={`${props.className} ${classes.container}`}>
      <div className={classes.date}>{day && dateConverter(day)}</div>
      <WeatherIcon
        className={classes.icon}
        type={dayData && dayData.weather[0].main}
      />
      <div className={classes.dateData}>
        {kelvinToCelcius(dayData && dayData.temp.day)}°
      </div>
    </div>
  );
}

export default WeatherNavLink;
