import React from "react";
import classes from "./WeatherNavByHoursItem.module.css";
import WeatherIcon from "./WeatherIcon";
function WeatherNavByHoursItem(props) {
  const { hour, type, degree } = props;
  const checkCurrent = () => {
    const current = new Date().getHours().toString();
    return current === hour ? "Now" : hour;
  };

  return (
    <div className={classes.hourlyContainer}>
      <div className={classes.hour}>{checkCurrent()}</div>
      <WeatherIcon className={classes.icon} type={type} />
      <div className={classes.desc}>{degree}°</div>
    </div>
  );
}

export default WeatherNavByHoursItem;
