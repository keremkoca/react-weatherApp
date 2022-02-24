import React from "react";
import classes from "./WeatherNavLink.module.css";
const dateConverter = (date) => {
  const today = new Date();
  const newDate = new Date(date * 1000);
  const weekOptions = { weekday: "short" };
  const monthOptions = { month: "short" };
  const [month, dayNum, weekDay] = [
    new Intl.DateTimeFormat("en-US", monthOptions).format(newDate),
    newDate.getDate(),
    new Intl.DateTimeFormat("en-US", weekOptions).format(newDate),
  ];
  return `${
    today.getDate() === dayNum ? "Today" : weekDay
  }, ${dayNum} ${month}`;
};
function WeatherNavLink(props) {
  const { day } = props;
  return (
    <div className={classes.day} key={day.dt}>
      {dateConverter(day)}
    </div>
  );
}

export default WeatherNavLink;
