import React from "react";
import classes from "./SingleDayForecast.module.css";
function SingleDayForecast(props) {
  const { date } = props;
  const dateConverter = (date) => {
    const today = new Date();
    console.log(today.getDate());
    const newDate = new Date(date * 1000);
    const weekOptions = { weekday: "short" };
    const monthOptions = { month: "short" };
    const [month, dayNum, weekDay] = [
      new Intl.DateTimeFormat("en-US", monthOptions).format(newDate),
      newDate.getDate(),
      new Intl.DateTimeFormat("en-US", weekOptions).format(newDate),
    ];
    return `${today == dayNum ? "today" : weekDay},${dayNum} ${month}`;
  };
  return (
    <div className={classes.container}>
      <div className={classes.time}>{dateConverter(date)}</div>
    </div>
  );
}

export default SingleDayForecast;
