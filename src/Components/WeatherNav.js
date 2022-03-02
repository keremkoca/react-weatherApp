import React, { useEffect } from "react";
import classes from "./WeatherNav.module.css";
import WeatherNavLink from "./WeatherNavLink";
import { useContext, useState } from "react";
import Context from "../Utils/context";
function WeatherNav(props) {
  const { stateDataReducer: state } = useContext(Context);
  console.log(state.daily, state.daily.length);
  const [count, setCount] = useState(0);
  const [daysToDisplay, setDaysToDisplay] = useState([]);
  const addToDisplay = (days) => {
    const updatedDays = [];
    for (let i = count; i <= count + 2; i++) {
      updatedDays.push(days[i]);
    }
    return updatedDays;
  };
  useEffect(() => {
    setDaysToDisplay(addToDisplay(state.daily));
  }, [count]);

  console.log(daysToDisplay);
  return (
    <div className={classes.navContainer}>
      <button
        className={classes.left_btn}
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
      ></button>
      {daysToDisplay.map((day) => {
        return <WeatherNavLink key={day.dt} day={day.dt}></WeatherNavLink>;
      })}
      <button
        className={classes.right_btn}
        onClick={() => {
          count <= state.daily.length / 2 && setCount(count + 1);
        }}
      ></button>
    </div>
  );
}

export default WeatherNav;
