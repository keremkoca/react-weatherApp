import React from "react";
import classes from "./WeatherNav.module.css";
import WeatherNavLink from "./WeatherNavLink";
import { useContext, useState } from "react";
import Context from "../Utils/context";
function WeatherNav(props) {
  const { stateDataReducer: state } = useContext(Context);
  const [count, setCount] = useState(0);
  const addToDisplay = (days) => {
    const updatedDays = [];
    for (let i = count; i <= count + 2; i++) {
      updatedDays.push(days[i]);
    }
    return updatedDays;
  };
  const handleOnClick = (event) => {
    event.target.name === "minus"
      ? setCount((prev) => prev - 1)
      : setCount((prev) => prev + 1);
  };
  const daysToDisplay = addToDisplay(state.daily);
  console.log(daysToDisplay);
  return (
    <div className={classes.navContainer}>
      <button
        className={classes.left_btn}
        name="minus"
        onClick={handleOnClick}
      ></button>
      {daysToDisplay.map((day) => {
        return <WeatherNavLink key={day.dt} day={day.dt}></WeatherNavLink>;
      })}
      <button
        className={classes.right_btn}
        name="plus"
        onClick={handleOnClick}
      ></button>
    </div>
  );
}

export default WeatherNav;
