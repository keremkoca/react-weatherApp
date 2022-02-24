import React from "react";
import classes from "./SingleDayForecast.module.css";
function SingleDayForecast(props) {
  const { date } = props;
  return (
    <div className={classes.container}>
      <div className={classes.day_container}>
        <div className={classes.day}>
          {<label className={classes.p}>{}</label>}
        </div>
      </div>
      <div className={classes.hourly_container}>
        <div className={classes.hourly}>
          <div className={classes.hour}></div>
          <div className={classes.icon}></div>
          <div className={classes.degree}></div>
        </div>
        <div className={classes.hourly}>
          <div className={classes.hour}></div>
          <div className={classes.icon}></div>
          <div className={classes.degree}></div>
        </div>
        <div className={classes.hourly}>
          <div className={classes.hour}></div>
          <div className={classes.icon}></div>
          <div className={classes.degree}></div>
        </div>
      </div>
    </div>
  );
}

export default SingleDayForecast;
