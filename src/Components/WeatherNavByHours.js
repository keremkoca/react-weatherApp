import React, { useContext, useState, useEffect } from "react";
import classes from "./WeatherNavByHours.module.css";
import WeatherNavByHoursItem from "./WeatherNavByHoursItem";
import Context from "../Utils/context";
import { kelvinToCelcius } from "../functions/functions";

function WeatherNavByHours() {
  const { stateDataReducer: state } = useContext(Context);
  const [count, setCount] = useState(0);
  const [hoursToDisplay, setHoursToDisplay] = useState([]);
  const [slide, setSlide] = useState();

  const addToDisplay = (hours) => {
    let updatedHours = [];
    for (let i = count; i <= count + 3; i++) {
      updatedHours.push(hours[i]);
    }
    return updatedHours;
  };

  useEffect(() => {
    setHoursToDisplay(addToDisplay(state.hourly));
  }, [count, state.hourly]);
  useEffect(() => {
    setCount(0);
  }, [state.currentDayHours]);

  const hourlyDateConverter = (date) => {
    const newHour = new Date(date * 1000).getHours();
    return `${newHour}`;
  };
  return (
    <div className={classes.container}>
      <div className={classes.navContainerHeader}>
        <h3>Next 48 hours</h3>
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

        <div className={classes.navItemContainer}>
          <div className={`${classes.navItemInnerContainer} ${slide}`}>
            {hoursToDisplay.map((hour) => {
              return (
                <WeatherNavByHoursItem
                  key={hour.dt}
                  hour={hourlyDateConverter(hour.dt)}
                  type={hour.weather[0].main}
                  degree={kelvinToCelcius(hour.temp)}
                />
              );
            })}
          </div>
        </div>
        <button
          className={classes.right_btn}
          onClick={() => {
            count < state.hourly.length - 3 && setCount(count + 1);
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

export default WeatherNavByHours;
