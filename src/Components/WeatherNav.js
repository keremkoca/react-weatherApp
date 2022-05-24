import React, { useEffect } from "react";
import classes from "./WeatherNav.module.css";
import WeatherNavLink from "./WeatherNavLink";
import { useContext, useState, useCallback } from "react";
import Context from "../Utils/context";
function WeatherNav() {
  const {
    stateDataReducer: { daily },
  } = useContext(Context);
  const [count, setCount] = useState(0);
  const [daysToDisplay, setDaysToDisplay] = useState([]);
  const [slide, setSlide] = useState();

  const addToDisplay = useCallback(
    (days) => {
      const updatedDays = [];
      for (let i = count; i <= count + 2; i++) {
        updatedDays.push(days[i]);
      }
      return updatedDays;
    },
    [count]
  );

  useEffect(() => {
    setDaysToDisplay(addToDisplay(daily));
    fadeClass();
  }, [count, daily, addToDisplay]);
  const fadeClass = () => classes.slideFade;
  return (
    <div className={classes.container}>
      <div className={classes.navContainerHeader}>
        <h3>Next 7 days</h3>
      </div>
      <div className={classes.navContainer}>
        <button
          className={classes.left_btn}
          onClick={() => {
            count > 0 && setCount(count - 1);
            setSlide(() => classes.slideToLeft);
            setTimeout(() => {
              setSlide("");
            }, 301);
          }}
        ></button>
        <div className={`${classes.linkContainer}`}>
          <div className={`${classes.linkContainer} ${slide}`}>
            {daysToDisplay.map((day, index) => {
              return (
                <WeatherNavLink
                  key={index}
                  dayData={day}
                  day={day?.dt}
                ></WeatherNavLink>
              );
            })}
          </div>
        </div>
        <button
          className={classes.right_btn}
          onClick={() => {
            count <= daily.length / 2 && setCount(count + 1);
            setSlide(() => classes.slideToRight);
            setTimeout(() => {
              setSlide("");
            }, 301);
          }}
        ></button>
      </div>
    </div>
  );
}

export default WeatherNav;
