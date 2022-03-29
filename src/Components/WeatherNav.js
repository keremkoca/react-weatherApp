import React, { useEffect } from "react";
import classes from "./WeatherNav.module.css";
import WeatherNavLink from "./WeatherNavLink";
import { useContext, useState } from "react";
import Context from "../Utils/context";
function WeatherNav() {
  const { stateDataReducer: state } = useContext(Context);
  const [count, setCount] = useState(0);
  const [daysToDisplay, setDaysToDisplay] = useState([]);
  const [slide, setSlide] = useState();

  const addToDisplay = (days) => {
    const updatedDays = [];
    for (let i = count; i <= count + 2; i++) {
      updatedDays.push(days[i]);
    }
    return updatedDays;
  };
  console.log(state.daily, daysToDisplay);
  useEffect(() => {
    setDaysToDisplay(addToDisplay(state.daily));
    fadeClass();
  }, [count, state.daily]);
  const showClass = () => {
    return classes.show;
  };
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
            {daysToDisplay.map((day) => {
              console.log(day);
              return (
                <WeatherNavLink
                  key={day.dt}
                  dayData={day}
                  day={day.dt}
                ></WeatherNavLink>
              );
            })}
          </div>
        </div>
        <button
          className={classes.right_btn}
          onClick={() => {
            count <= state.daily.length / 2 && setCount(count + 1);
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
